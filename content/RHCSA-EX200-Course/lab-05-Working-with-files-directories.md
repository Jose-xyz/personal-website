+++
date = '2024-11-20T22:15:37-05:00'
draft = false
title = 'Lab 5: Working With Files & Directories'
weight = 7
+++






{{< youtube 6Ov8Y92DriM >}}

##### Objective Focus
**Understand and use essential tools**
: Create and edit text files
: Create, delete, copy, and move files and directories

[Official RHCSA EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam?section=objectives)

In RHEL, most of our time will be spent with regular files and directories. 
- Files may contain text, a script, or binary data
- Directories are containers for files and other directories (sub-directories)

{{< highlight type="sh" warp="true" >}} $ stat <file or dir>{{< /highlight >}}
:	Try using stat on a file and a directory

#### File Editing 

###### VIM is going be your best friend when it comes to working with text files!

[Vim's Official Website](https://www.vim.org/)

Vim is the text editor to use here. There is nano as a second option but i am not going to cover that one. 

*VIM* stands for *Vi Improved* and *Vi* stands for Visual Editor. 

Two ways to start *vim* in the termial

{{< highlight type="sh" warp="true" >}} $ vim{{< /highlight >}}
{{< highlight type="sh" warp="true" >}} $ vim <file> {{< /highlight >}}

From here, we cycle through escape and insert modes. 

|Command| Action |
:--------:|---------
i|Enter insert mode|
ESC key | Enter escape mode|
home key | move cursor to start of the line|
end key | move cursor to end of the line|

###### Save and Quit in VIM

While in Escape mode

|Command|Action|
:------:|-------
:w| Save only; does not close vim|
:wq|Save and quit vim|
:q|Quits if no changes were made|

###### Moving around in VIM

| Command     | Action |
| :-----------: | ----------- |
| **Up/Down Arrow | Move view of page up and down       |
| gg/G   | *Move to top man page/ Move to bottom of man page        |
| /pattern   | *Searches forward in man page        |
| ?pattern   |  *Searches forward in man page        |
| n/N        | *Find next/previous pattern match|

*in ESC mode

**both modes
###### Delete, Paste, Undo

**In Escape mode**

| Command     | Action |
| :-----------: | ----------- |
|dd|deletes the entire current line; also acts like "cut"|
|D |delete everything right of the cursor; also acts like "cut"|
|u|Undoes previous command, like Ctrl+z in Windows|
|yy|copies current line|
|p|pastes copied data |


###### Bonus vim tip for when "copy and paste" is not available

{{< highlight type="sh" warp="true" >}} :r !<command>  {{< /highlight >}}
- I am sure there are better ways to do this


##### Learning through action

vimtutor is a great tool for exploring more commands and options available. 

{{< highlight type="sh" warp="true" >}} $ vimtutor  {{< /highlight >}}


Above I covered the mininum needed to use vim.
###### Creating Files

Many ways to create a file, we will focus on two.


{{< highlight type="sh" warp="true" >}} $ touch <filename> {{< /highlight >}}
{{< highlight type="sh" warp="true" >}} $ vim <filename> {{< /highlight >}}

*Touch* creates a an empty file

*VIM* creates the file and opens it in *VIM*

###### Creating Directories

{{< highlight type="sh" warp="true" >}} $ mkdir <dirname> {{< /highlight >}}
{{< highlight type="sh" warp="true" >}} $ mkdir -p dir1/subdir/subdir {{< /highlight >}}
- the -p creates the parent directories as list in the argument 

###### Copying Files and Directories
To copy files and directories we use the "copy" command aka *$ cp*

{{< highlight type="sh" warp="true" >}} $ cp <file> <copyoffile> {{< /highlight >}}
- copies file with new name in same directory

{{< highlight type="sh" warp="true" >}} $ cp -r  <dir1> <dir2> {{< /highlight >}}
- copies anything under dir to another dir

{{< highlight type="sh" warp="true" >}} $ cp <file> <dir> {{< /highlight >}}
- copies file into another, will overwrite file of same name in the destination dir



###### Moving Files and Directories

To move files and directories we the "move" command aka *$ mv*
Also, renames files 

{{< highlight type="sh" warp="true" >}} $ mv <file> <destdir> {{< /highlight >}}
- moves file to new dir

{{< highlight type="sh" warp="true" >}} $ mv <file> <renamedfile> {{< /highlight >}}
- if dir doesn't exist then it use argument to as new name of file 

{{< highlight type="sh" warp="true" >}} $ mv <dir> <exisitingdir> {{< /highlight >}}
- moving a dir into another dir

{{< highlight type="sh" warp="true" >}} $ mv <dir> <renameddir> {{< /highlight >}}
- if it doesn't exist then it will rename directory 


###### Deleting Files and Directories 

{{< highlight type="sh" warp="true" >}} $ rm <filename> {{< /highlight >}}
- deletes file 

{{< highlight type="sh" warp="true" >}} $ rm -r <dir> {{< /highlight >}}
- -r option means recursively; deletes dir and its contents 

That's it for lab 5! 


