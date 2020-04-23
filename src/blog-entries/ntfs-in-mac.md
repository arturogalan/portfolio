
# 🧙‍♂️Utility to write on NTFS volumes in MAC for free!

This is the explanation about an AppleScript that you can install in your mac to automatically **make NTFS volumes writable** 👹.

If you don’t want to read all the steps, just [**download the zipped file**](https://github.com/arturogalan/ntfs-mac-automator/raw/master/NTFS%20writable%20utility.zip) from my Github and double-click it. 

If you want to see the code or customize your own AppleScript just visit the [**Github repo**](https://github.com/arturogalan/ntfs-mac-automator/) and paste the code into you Automator (Mac utility) to change the code.

![Free utility that asks you to make your NTFS disks and USB sticks writable](https://cdn-images-1.medium.com/max/2040/1*uN1MngCdr_KeKHMRlKJ_RQ.gif)
*Free utility that asks you to make your NTFS disks and USB sticks writable*

## The problem: Trying to write in an external disk in my MacBook pro 💻

I’ve been for several years using Mac, and I really love the power, speed, screen and battery life of the machine but…¿Why the hell can’t I write into my external NTFS drives?… I have an old windows computer, android phones and external backup discs full of Terabytes of photos and videos, that I want to keep compatible with my smart TV…so I’ll have to spend weeks to change all this stuff to Fat-32, exFat, APFS or to any other file system, and loose this compatibilities. We usually have all this devices in Windows NTFS format (New Technology File System).

Nice side-effect thanks to Apple-Microsoft friendship 👊.

Searching for the options to enable my Mac writing over **NTFS formatted disks** basically I found two possibilities:

**Expensive one:** Buy a program of any of the companies that have taken advantage of this issue. I usually buy useful software when I need it, do not misunderstand me, but in this case I prefer not to install something that is going to control my hard drives…sounds risky.

**Cheap but manual one:** With some computer knowledge and searching on the web you’ll find that macOS, as all the Unix based operating systems, has a file called *fstab* in witch you can define the properties of the mounting process of the volumes that you attach to your computer. All you have to do is:

* Open the */etc/fstab* file (with administrator privileges)
`sudo nano /etc/fstab`

* Write in this file a line with the name of your external volume followed by some properties and replacing spaces with *\040* if the volume name has them, for example if your disc is MY DRIVE NAME:
`LABEL=MY\040DRIVE\040NAME none ntfs rw,auto,nobrowse`

* unMount your volume

* Mount your volume

* Open in finder */Volumes* folder or open Disk Utility program to see your disc, because **with this trick the drive will be writable but it will not appear in Finder**.

This manual solution has inconveniences, that I’ve been facing this years: **You have to do this for every disk you have**, you have to do it every time you install or format your computer (something that we (developers) like to do without specific purpose…), is mandatory if you change the label of your external disk and finally you have to remember replacing the spaces in the name of the volume with *\040* when you added it to the fstab file.

## **Automate this? Here comes the funny part** 🤖

[AppleScript is a language](https://en.wikipedia.org/wiki/AppleScript) that helps you control and automate tasks in your computer, and now supports Javascript!! .

[Automator is a program](https://support.apple.com/guide/automator/welcome/mac) that helps you trigger things when other things happen in your MAC computer.

Combining this couple of tools that come out of the box in every mac, we can develop a script in AppleScript and launch it every time a new file is included in */Volumes* filesystem, which means that an external volume has been attached.

In this script we’ll do several things:

1. First of all, we need to get the **name and the format of the new added disk**, we will do this by:

* Getting the name of the file that has been added to the volumes folder, this is given by the automator program that triggers the execution of this script inside an input param called… input, it comes with **:** character so we’ll remove it to get the clean name of the volume:
```
    set lastVolumeAdded to replace_chars(input as *string*, ":" as *string*, "" as *string*)
```
* Executing the shell script *diskutil info -plist *that will give us the properties of the volume, and looking inside this XML for the value of a property called* *FilesystemType with the **sed** command. If this value is **“ntfs”** we have a candidate, this also is helpful to evict triggering the script when you double click into a .dmg file to install a program in Mac (this images are also mounted in */Volumes* folder).

```
    set diskType to do shell script "diskutil info -plist '" & lastVolumeAdded & "' | grep -A 1 'FilesystemType' | sed -n \"s@.*<string>\\(.*\\)</string>.*@\\1@p\""
```

2. The next step is to figure out whether** **this volume **is already in fstab file**. We will use the grep command to look inside the file, and the sed command to avoid grep command to return a code greater than 0, that is interpreted as an error. We replace the possible spaces in the name with *\040 *before searching
```
    set fstabSpace to "\\\\\\\\040"
    set spacing to " "
    set fstabVolumeName to replace_chars(lastVolumeAdded as string, spacing, fstabSpace)

    set spacing to " "

    set fstabVolumeName to replace_chars(lastVolumeAdded as string, spacing, fstabSpace)

    set response to do shell script "grep " & fstabVolumeName & " /etc/fstab | sed"
```
3. If the volume is not present, then we are ready to do the steps defined before in the manual solution: **Add the line to fstab, unmount and mount the disk, and open /volumes folder**.
```
    do shell script "echo LABEL=" & fstabVolumeName & " none ntfs rw,auto,nobrowse >> /etc/fstab" with administrator privileges
    do shell script "diskutil unmount '" & lastVolumeAdded
    do shell script "diskutil mount '" & lastVolumeAdded
    open /Volumes
```
4. But instead of just opening the */Volumes* folder in Finder once we’ve mounted the drive, we are going to open */Volumes* and right after we’ll open the volume attached in the same Finder window.

With this trick **we’ll enable the back button of Finder to get back to volumes folder if we wish**…for example to unmount it after pasting our files, now that it’s writable Hahahaha 👹
```
    tell application "Finder"
          activate
          open ("/Volumes" as POSIX file)
          delay 0.1
          set target of front window to ("/Volumes/" & lastVolumeAdded as POSIX file)
    end tell
```
5. Finally we’ll also write the behavior when the volume is already added in fstab, just the same as previous step: open the finder.

6. Now that we have the script ready, we can put all this in an automator, to do this we open the automator program and select a new **Folder action** automation. Then we add all the code of the script between the *on run {input, parameters}* and the *end run* lines, and we select the folder */Volumes* as the trigger for this action.

Finally we save it.

And….. dadaaaaaa we have our **own script** that is always listening, and when we plug an NTFS USB stick then, It magically **asks you to make it writeable** and you can also put some emojis in the notifications!!! 🥰

![](https://cdn-images-1.medium.com/max/2128/1*ZC0J-mvjIepGPEqgH1aTBQ.png)

Then it **enables the write mode and opens a Finder** window to easily access your drive and navigate back to Volumes folder

And if the disk is already added then it just opens the volumes folder

![When the volume is already in fstab, the script just opens Finder](https://cdn-images-1.medium.com/max/2068/1*aJRjHRYpiYPvMpl8LeWefA.gif)
*When the volume is already in fstab, the script just opens Finder*

The best of this approach is that once you have done all this stuff, you can export the automator and have it as **a single file** with *utility.workflow* extension that you can** install on any Mac computer with just a double-click into the file**.

![utility.workflow file that you can install on any mac computer](https://cdn-images-1.medium.com/max/3292/1*zqnARJeXObJf85ERg5EWaA.png)
*utility.workflow file that you can install on any mac computer*

**And what if I want to remove it?**

If you want to remove the installed workflow you just have to go to your user library folder (*open /Users/my_user_name/Library/Workflows/*) and remove the utility file…

**And what if it fails mounting?**

I’ve experimented some issues mounting drives with ntfs formats with a BOOT iso image inside…I think this could be related to the fact that they are MBR instead of GPT.

Maybe some of the solutions in the script are not elegant, so please**…any Merge Request or Feature is welcome in the repository**…

Can yo imagine other functionalities that can be built witch Applescript?¿Maybe an utility to visually manage the volumes attached to the *fstab* file?

Any comments are welcome!

*If you like this post, please don’t forget to click 👏*
