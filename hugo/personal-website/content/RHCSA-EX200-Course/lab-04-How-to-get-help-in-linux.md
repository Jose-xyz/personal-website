+++
date = '2024-11-16T14:57:58-05:00'
draft = false
title = 'Lab 4: How to Get Help in Linux'
+++

### Page Under Contruction


##### Objective Focus
**Understand and use essential tools**
: Locate, read, and use system documentation including man, info, and files in /usr/share/doc

Getting help in a Red Hat Linux environment, or any Linux OS, starts with your end goal. 

For example, I need to know permissions of every file in user *learners* home directory.
 - First, we learned about *$ ls* in Lab 2, that will help us list out the files in the directory. 
{{< highlight type="sh" warp="true" >}}
   [learner@server1 ~]$ ls
	Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
	{{< /highlight >}}

- *$ ls* alone does not meet our end goal. 

- Enter **Man Pages**, short for Manual Pages. 
	- Using man pages is going to be essential to passing the EX200. 
	- These manual pages are going to be avaliable to you during the exam.

- To get the manual page on *$ ls*, we use the systax *$ man "command"*

{{< highlight type="sh" warp="true" >}}
 [learner@server1 ~]$ man ls 
{{< /highlight >}}

- This brings up the manual page for *$ ls*, the table below shows us how to navigate a man page. 


| Buttons      | What they do |
| ----------- | ----------- |
| Up/Down Arrow | Move View of Page Up and Down       |
| Paragraph   | Text        |
