+++
date = '2024-11-12T15:55:57-05:00'
draft = false
title = 'Lab 1: Install'
weight = 3
+++

{{< youtube B5f0ZIe6Xas >}}

### Lab Set up

Type 2 Hypervisor
- Virt-Manager, Oracle Virtualbox, Vmware Workstation

We will use virt-manager on a Linux OS for this course

Please refer to respective documentation for your choice of type 2 virtualization

Preferred resources on host machine should be at least a dual-core processor, 64GB of free storage and 16GB of RAM
- This is a recommendation


Getting the Red Hat Enterprise Linux 9 Image

- Create a Red Hat account
- [Link to Developer Products page](https://developers.redhat.com/products/rhel/download#rhelforsap896)

- Download x86_64 DVD iso, it should be about **10.32GB** 

##### Server Set Up / Installation Summary 

|Server1.example.com|Server2.example.com|
|-------------------|-------------------|
|192.168.10.10/24** |192.168.10.20/24** |
|      2 vCPU       |      2 vCPU       |
|2 GB RAM           |2 GB RAM           |  
|20 GB of Disk Space|20 GB of Disk Space|
|Server with GUI    |Minimal Install    |

- **IPv4 addresses should be in the same subnet as your host machine
- Example: If your host machine is 128.64.32.2, your RHEL VMs should be 128.64.32.10 and 128.64.32.20, respectively

- Also, you can less disk space but try not go below 15GBs

Installation Destination 
- Storage Configuration: Automatic

User Settings
- Set Root Password
- [x] Allow root ssh login with Password
- Create a user named "learner"

Begin installation! *Might take a while but be patient*

After install is complete, login and create a snapshot. 

Creating a snapshot of the VM will differ slightly for every virtualization software.

Lab 01 is done

Helpful Links

[Link to Virt-Manager](https://virt-manager.org/)

[Link to Virtual Box](https://www.virtualbox.org/)

