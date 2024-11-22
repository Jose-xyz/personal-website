+++
date = '2024-11-15T11:01:51-05:00'
draft = false
title = 'Lab 3: Directory Structure and Filesystem'
weight =  5
+++

{{< youtube f_BzC9-s1iE >}}


###### Display of Directory Structure using $Tree Command

- Edited ouput

		[root@server1 /]# tree -d -L 2
		.
		├── afs
		├── bin -> usr/bin
		├── boot
		│   ├── efi
		│   ├── grub2
		│   └── loader
		├── dev
		│   ├── block
		│   ├── bsg
		│   ├── bus
		│   ├── snd
		│   ├── vfio
		│   └── virtio-ports
		├── etc
		│   ├── accountsservice
		│   ├── alsa
		│   ├── tmpfiles.d
		│   ├── tpm2-tss
		│   ├── tuned
		│   ├── udev
		│   └── yum.repos.d
		├── home
		│   └── learner
		├── lib -> usr/lib
		├── lib64 -> usr/lib64
		├── media
		├── mnt
		├── opt
		├── proc
		│   ├── driver
		│   ├── fs
		│   ├── irq
		│   ├── net -> self/net
		│   ├── scsi
		│   ├── self -> 2892
		│   ├── sys
		│   ├── sysvipc
		│   ├── thread-self -> 2892/task/2892
		│   └── tty
		├── root
		├── run
		│   ├── share
		│   ├── src
		│   └── tmp -> ../var/tmp
		└── var
			├── adm
			├── ftp
			├── games

###### "Everything is a File"

In the linux/GNU operating system, eveything appears in some say in the file system. 

Here is a [link](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) to a wiki page explaining the Filesystem used in Red Hat Linux. 

Here is a [link](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-filesystem#s3-filesystem-dev) to Red Hat's documentation related to the file system and structure. 


##### Getting to know the directory structure and file system

{{< highlight type="sh" >}}
$ tree 
{{< /highlight >}}
: (*tree*) - list contents of directories in a tree-like format.

The *tree* command is going to help us explore. 

| Options      | What they do    |
| -----------  | -----------     |
| -a           |Show hidden files|
| -d           |Don't show files; Only show directory name  |
| -h           |Show human-readable file sizes |
| -f		   | Print the full path files |



- Lab Challenge: Using *$tree* list all files including hidden files in the /etc with their  fullpath shown. What do you see and don't see?

That's all to explore here for lab 4! 

Take some time to look around even if you do not know what everything means or its purpose. 

