+++
date = '2024-11-20T22:15:37-05:00'
draft = false
title = 'Lab 5: Working With Files & Directories'
weight = 7
+++





##### Page Under Construction

{{< youtube xxxxxxxxx >}}

##### Objective Focus
**Understand and use essential tools**
: Create and edit text files
: Create, delete, copy, and move files and directories all the time.

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

Bonus vim tip for when "copy and paste" is not available

{{< highlight type="sh" warp="true" >}} :r !<command>  {{< /highlight >}}
- I am sure there are better ways to do this


##### Learning through action





