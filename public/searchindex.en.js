var relearn_searchindex = [
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "I passed the RHCSA Exam (EX200) in July of 2024.\nStudy Resources Link to RHEL 9 Iso\nLink to RHCSA Exam Objectives\nLink to videos course from Sander Van Vugt + his labs\nBooks I used Red Hat RHCSA 9 Cert Guide: EX200 - Sander Van Vugt Covers all objectives but Sander has some unique ways of accomplishing tasks. Example “Resetting root password” using init=/bin/bash instead of rd.break. RHCSA Red Hat Enterprise Linux 9 Certification Study Guide, Eighth Edition – Michael Jang Great labs but missing some details on certain objectives Great Online material! Docs and Exams An example of material not covered so well were Containers. There were not as many examples as Sander’s book or video course. RHCSA Red Hat Enterprise Linux 9: Training and Exam Preparation Guide (EX200), Third Edition – Asghar Ghori I did not use this book in my studies but looked at it after passing and wished I did! Technology for Lab Virt Manager I used virt-manager on a linux OS (RHEL 9 in this case) for my lab purposes. Most study materials suggest creating two VMs for study. Getting hand-ons practice was the most valuable component of my prep. I also had a dual monitor display but remember, you will only be allowed to use one monitor on exam day.\nStudy Routine 3 months from May to the end of July\nI read and followed Sanders book from start to finish and did labs along the way. Then, I did the same with Jang’s book.\nI used Sanders Video course on Oreilly.com to focus on objectives that weren’t too clear in the books.\nI did labs almost everyday and practiced tasks with multiple steps like LVM configuration and containers regularly. I did this because these tasks involve multiple steps and I wanted to reduce the time I spent looking through man pages.\nI took breaks when I needed. For example, in a 1 – 2 hour study session I had like 15 two-min breaks.\nYes, I took that many breaks, especially on days that the study material was tough to get through.\nIf I did not have too much energy after work, I would do at minimum one task related to an objectives – ie a task from the labs in the book resources.\nI studied mostly in the evening and right before bed because I was also working a full-time job.\nActual Exam Pick a date sooner than later. I chose July 29th and stuck to it.\nIt forced me to study on those busier days.\nDuring the actual exam, make sure to keep going even when you hit a bump in the road.\nI remember doing a task, and halfway through, I realized I was doing it on the wrong VM.\nHere are some helpful links provided by Red Hat How to navigate the exam\nGetting for the remote, bootable USB set up\nFinal Thoughts This was the first practical certification exam I had ever taken and I was nervous going into it. I took this exam for my own personal interests and my success or faliure was not tied to my job, at the time or anything. There was a bit of relief in that but I made it a goal and wanted to be successful!\nAs cliche as it may sound, if i can do it so can you!",
    "description": "I passed the RHCSA Exam (EX200) in July of 2024.\nStudy Resources Link to RHEL 9 Iso\nLink to RHCSA Exam Objectives\nLink to videos course from Sander Van Vugt + his labs\nBooks I used Red Hat RHCSA 9 Cert Guide: EX200 - Sander Van Vugt Covers all objectives but Sander has some unique ways of accomplishing tasks. Example “Resetting root password” using init=/bin/bash instead of rd.break. RHCSA Red Hat Enterprise Linux 9 Certification Study Guide, Eighth Edition – Michael Jang Great labs but missing some details on certain objectives Great Online material! Docs and Exams An example of material not covered so well were Containers. There were not as many examples as Sander’s book or video course. RHCSA Red Hat Enterprise Linux 9: Training and Exam Preparation Guide (EX200), Third Edition – Asghar Ghori I did not use this book in my studies but looked at it after passing and wished I did! Technology for Lab Virt Manager I used virt-manager on a linux OS (RHEL 9 in this case) for my lab purposes. Most study materials suggest creating two VMs for study. Getting hand-ons practice was the most valuable component of my prep. I also had a dual monitor display but remember, you will only be allowed to use one monitor on exam day.",
    "tags": [],
    "title": "How I Passed the RHCSA EX200 in 2024",
    "uri": "/rhcsa-ex200-course/how-i-passed-rhcsa/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "The Start whoami Red Hat Certified System Administrator - July 2024\nCreditial ID 240-141-275 Experienced IT Professional\nHelp Desk, Analyst, Technical Consultant, Support Specialist, Engineer Fan of Linux and the value it provides.\nWho this course is for… Anyone who wants to learn about Linux with respect to Red Hat Enterprise Linux 9\nIT professionals who want to expand their knowledge on Linux based administration\nAnyone looking to supplement their RHCSA study material\nWhat you need Some Information Technology experience\nComptia A+, Network+ or similar If you do not, fill the gaps in knowledge as they come up with a google search or other resources Access to a computer with virtualization enabled\nFor the Labs RHEL 9 Iso\nType 2 Hypervisor\nVirt-Manager, Oracle Virtualbox, Vmware Workstation We will use virt-manager on a Linux OS for this course\nPlease refer to respective documentation for your choice of type 2 virtualization\nPreferred resources on host machine should be at least a dual-core processor, 64GB of free storage and 16GB of RAM\nThis is a recommendation Helpful links History of Linux\nHistory of Red Hat\nHistory of Unix\nLink to Red Hat Enterprise Linux ISO\nLink to Virt-Manager\nLink to Virtual Box",
    "description": "The Start whoami Red Hat Certified System Administrator - July 2024\nCreditial ID 240-141-275 Experienced IT Professional\nHelp Desk, Analyst, Technical Consultant, Support Specialist, Engineer Fan of Linux and the value it provides.\nWho this course is for… Anyone who wants to learn about Linux with respect to Red Hat Enterprise Linux 9",
    "tags": [],
    "title": "Day 1: Intro",
    "uri": "/rhcsa-ex200-course/day-1-intro/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "Lab Set up Type 2 Hypervisor\nVirt-Manager, Oracle Virtualbox, Vmware Workstation We will use virt-manager on a Linux OS for this course\nPlease refer to respective documentation for your choice of type 2 virtualization\nPreferred resources on host machine should be at least a dual-core processor, 64GB of free storage and 16GB of RAM\nThis is a recommendation Getting the Red Hat Enterprise Linux 9 Image\nCreate a Red Hat account\nLink to Developer Products page\nDownload x86_64 DVD iso, it should be about 10.32GB\nServer Set Up / Installation Summary Server1.example.com Server2.example.com 192.168.10.10/24** 192.168.10.20/24** 2 vCPU 2 vCPU 2 GB RAM 2 GB RAM 20 GB of Disk Space 20 GB of Disk Space Server with GUI Minimal Install **IPv4 addresses should be in the same subnet as your host machine\nExample: If your host machine is 128.64.32.2, your RHEL VMs should be 128.64.32.10 and 128.64.32.20, respectively\nAlso, you can less disk space but try not go below 15GBs\nInstallation Destination\nStorage Configuration: Automatic User Settings\nSet Root Password Allow root ssh login with Password Create a user named “learner” Begin installation! Might take a while but be patient\nAfter install is complete, login and create a snapshot.\nCreating a snapshot of the VM will differ slightly for every virtualization software.\nLab 01 is done\nHelpful Links\nLink to Virt-Manager\nLink to Virtual Box",
    "description": "Lab Set up Type 2 Hypervisor\nVirt-Manager, Oracle Virtualbox, Vmware Workstation We will use virt-manager on a Linux OS for this course\nPlease refer to respective documentation for your choice of type 2 virtualization\nPreferred resources on host machine should be at least a dual-core processor, 64GB of free storage and 16GB of RAM",
    "tags": [],
    "title": "Lab 1: Install",
    "uri": "/rhcsa-ex200-course/lab01-install/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "Objective Focus Understand and use essential tools Access a shell prompt and issue commands with correct syntax Official RHCSA EX200 Exam Objectives\nIn the video, I also include some setting changes that I found to be useful during my study time.\nMute the water drop sound\nSettings \u003e Sound \u003e System Sounds - Mute System Sounds Stop the lock screen after being idle\nSettings \u003e Power \u003e Power Saving Options \u003e Screen Blank - Set to Never From now on, we will always work from the terminal first.\nThe reason is because the terminal will always be available to us even if there no GUI.\nCommand Syntax Comand -option(s) argument $ ls $ ls -l $ ls -la or ls -al $ ls –all $ ls -l /etc Getting started in the terminal $ ls (List) - It is used to show the list and files in directory $ pwd (Print Working Directory) - print name of current/working directory $ cd (Change Directory) - change/move between directories Where to find Terminal/Bash Shortcuts Terminal \u003e Preferences \u003e Help \u003e Keyboard Shortcuts My most used shortcuts\nClear - CRTL + L Erase a line - Ctrl+U Move to the start of the line - Ctrl+A Move to the end of the line - Ctrl+E I also mention how to use the auto-tab completions in the above video.\nthat saves a lot of time",
    "description": "Objective Focus Understand and use essential tools Access a shell prompt and issue commands with correct syntax Official RHCSA EX200 Exam Objectives\nIn the video, I also include some setting changes that I found to be useful during my study time.\nMute the water drop sound",
    "tags": [],
    "title": "Lab 2: Terminal and Command Syntax",
    "uri": "/rhcsa-ex200-course/lab02-termandcommands/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "Display of Directory Structure using $Tree Command Edited ouput\n[root@server1 /]# tree -d -L 2 . ├── afs ├── bin -\u003e usr/bin ├── boot │ ├── efi │ ├── grub2 │ └── loader ├── dev │ ├── block │ ├── bsg │ ├── bus │ ├── snd │ ├── vfio │ └── virtio-ports ├── etc │ ├── accountsservice │ ├── alsa │ ├── tmpfiles.d │ ├── tpm2-tss │ ├── tuned │ ├── udev │ └── yum.repos.d ├── home │ └── learner ├── lib -\u003e usr/lib ├── lib64 -\u003e usr/lib64 ├── media ├── mnt ├── opt ├── proc │ ├── driver │ ├── fs │ ├── irq │ ├── net -\u003e self/net │ ├── scsi │ ├── self -\u003e 2892 │ ├── sys │ ├── sysvipc │ ├── thread-self -\u003e 2892/task/2892 │ └── tty ├── root ├── run │ ├── share │ ├── src │ └── tmp -\u003e ../var/tmp └── var ├── adm ├── ftp ├── games “Everything is a File” In the linux/GNU operating system, eveything appears in some say in the file system.\nHere is a link to a wiki page explaining the Filesystem used in Red Hat Linux.\nHere is a link to Red Hat’s documentation related to the file system and structure.\nGetting to know the directory structure and file system $ tree (tree) - list contents of directories in a tree-like format. The tree command is going to help us explore.\nOptions What they do -a Show hidden files -d Don’t show files; Only show directory name -h Show human-readable file sizes -f Print the full path files Lab Challenge: Using $tree list all files including hidden files in the /etc with their fullpath shown. What do you see and don’t see? That’s all to explore here for lab 4!\nTake some time to look around even if you do not know what everything means or its purpose.",
    "description": "Display of Directory Structure using $Tree Command Edited ouput\n[root@server1 /]# tree -d -L 2 . ├── afs ├── bin -\u003e usr/bin ├── boot │ ├── efi │ ├── grub2 │ └── loader ├── dev │ ├── block │ ├── bsg │ ├── bus │ ├── snd │ ├── vfio │ └── virtio-ports ├── etc │ ├── accountsservice │ ├── alsa │ ├── tmpfiles.d │ ├── tpm2-tss │ ├── tuned │ ├── udev │ └── yum.repos.d ├── home │ └── learner ├── lib -\u003e usr/lib ├── lib64 -\u003e usr/lib64 ├── media ├── mnt ├── opt ├── proc │ ├── driver │ ├── fs │ ├── irq │ ├── net -\u003e self/net │ ├── scsi │ ├── self -\u003e 2892 │ ├── sys │ ├── sysvipc │ ├── thread-self -\u003e 2892/task/2892 │ └── tty ├── root ├── run │ ├── share │ ├── src │ └── tmp -\u003e ../var/tmp └── var ├── adm ├── ftp ├── games “Everything is a File” In the linux/GNU operating system, eveything appears in some say in the file system.",
    "tags": [],
    "title": "Lab 3: Directory Structure and Filesystem",
    "uri": "/rhcsa-ex200-course/lab-03-directory-struc-filesys/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "Objective Focus Understand and use essential tools Locate, read, and use system documentation including man, info, and files in /usr/share/doc Getting help in a Red Hat Linux environment, or any Linux OS, starts with your end goal.\nFor example, I need to know the last created directory in user learners home directory. Let us create a new directory\n$ mkdir newdir First, we learned about $ ls in Lab 2, that will help us list out the files in the directory. [learner@server1 ~]$ ls Desktop Documents Downloads Music Pictures Public Templates Videos $ ls alone does not meet our end goal.\nFrom here we have several options\nHelp option, usually an option like $ command -h --help Not all commands have the -h, –help option but it is always worth checking Sometimes, just typing in a error with a command will bring this up Next are Man Pages, short for Manual Pages.\nUsing man pages is going to be essential to passing the EX200. These manual pages are going to be avaliable to you during the exam. To get the manual page on $ ls, we use the systax $ man “command”\n[learner@server1 ~]$ man ls This brings up the manual page for $ ls, the table below shows us how to navigate a man page. Buttons What they do Up/Down Arrow Move view of page up and down Spacebar Move down one page g/G Move to top man page/ Move to bottom of man page q exit the man page /pattern Searches forward in man page ?pattern Searches forward in man page n/N Find next/previous pattern match h help with summary of commands Lets look at some available options, below are the ones that stand out for our goal -l use a long listing format -t sort by time, newest first; see --time How to look for a command searching man pages $ man -k \"keyword\" To search man pages for keywords [learner@server1 ~]$ man -k list list: nothing appropriate. If the above happens use the following command to index the man pages on the system.\n$ mandb The /usr/share/doc directory This directory contains an extensive list of documents related to software and programs on the system. Whenever the man pages and comman line tools, be sure to search here for more supporting information\n$ ls -l /usr/share/doc Info Pages Info pages are a great resource and provide a lot of details Getting to info pages are the same as getting to man pages $ info ls Press ‘h’ to get help on info pages and how to navigate\nThat is it for Lab 4, man pages and help options should suffice for the EX200 and we will continue use them through out the rest of the course.\nTrying to remember every command and avaliable option is impossible, so learning how to be resourceful is the key to completing every task.\nI am going to include the docs availiable on Red Hats website here.\nRead them for a cross reference to the man pages and help options.\nThe most important take away is getting comfortable reaching for man pages and internal system tools before googling and reaching out to the internet. :wq",
    "description": "Objective Focus Understand and use essential tools Locate, read, and use system documentation including man, info, and files in /usr/share/doc Getting help in a Red Hat Linux environment, or any Linux OS, starts with your end goal.\nFor example, I need to know the last created directory in user learners home directory. Let us create a new directory",
    "tags": [],
    "title": "Lab 4: How to Get Help in Linux",
    "uri": "/rhcsa-ex200-course/lab-04-how-to-get-help-in-linux/index.html"
  },
  {
    "breadcrumb": "front page \u003e RHCSA EX200 Course",
    "content": "Page Under Construction Objective Focus Understand and use essential tools Create and edit text files Create, delete, copy, and move files and directories all the time. In RHEL, most of our time will be spent with regular files and directories.\nFiles may contain text, a script, or binary data Directories are containers for files and other directories (sub-directories) $ stat \u003cfile or dir\u003e Try using stat on a file and a directory File Editing VIM is going be your best friend when it comes to working with text files! Vim’s Official Website\nVim is the text editor to use here. There is nano as a second option but i am not going to cover that one.",
    "description": "Page Under Construction Objective Focus Understand and use essential tools Create and edit text files Create, delete, copy, and move files and directories all the time. In RHEL, most of our time will be spent with regular files and directories.\nFiles may contain text, a script, or binary data Directories are containers for files and other directories (sub-directories) $ stat \u003cfile or dir\u003e Try using stat on a file and a directory File Editing VIM is going be your best friend when it comes to working with text files! Vim’s Official Website",
    "tags": [],
    "title": "Lab 5: Working With Files \u0026 Directories",
    "uri": "/rhcsa-ex200-course/lab-05-working-with-files-directories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Hi, thank you for checking out my site On this site, use the menu on the left to navigate all content.\nAt the moment, I am currently focused on the Free RHCSA Course.\nI am hosting this website on Vultr\nClick the referral link to support!",
    "description": "Hi, thank you for checking out my site On this site, use the menu on the left to navigate all content.\nAt the moment, I am currently focused on the Free RHCSA Course.\nI am hosting this website on Vultr\nClick the referral link to support!",
    "tags": [],
    "title": "front page",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "front page",
    "content": "List of all course material and videos free.\nDay 1: Intro How I Passed the RHCSA EX200 in 2024 Lab 1: Install Lab 2: Terminal and Command Syntax Lab 3: Directory Structure and Filesystem Lab 4: How to Get Help in Linux Lab 5: Working With Files \u0026 Directories",
    "description": "List of all course material and videos free.\nDay 1: Intro How I Passed the RHCSA EX200 in 2024 Lab 1: Install Lab 2: Terminal and Command Syntax Lab 3: Directory Structure and Filesystem Lab 4: How to Get Help in Linux Lab 5: Working With Files \u0026 Directories",
    "tags": [],
    "title": "RHCSA EX200 Course",
    "uri": "/rhcsa-ex200-course/index.html"
  },
  {
    "breadcrumb": "front page",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "front page",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
