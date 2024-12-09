
+++
date = '2024-12-04T15:52:37-05:00'
draft = false
title = 'Lab 06: Input Output Redirection'
weight = 8 
+++
{{< youtube xxxxxxxxxx >}}


##### Objective Focus
**Understand and use essential tools**
: Create and edit text files
: Use input-output redirection (>, >>, |, 2>, etc.)

[Official RHCSA EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam?section=objectives)


###### Looking At File Content as Terminal Output

{{< highlight type="sh" warp="true" >}} $ cat  {{< /highlight >}}
- concatenate files and print on the standard output

{{< highlight type="sh" warp="true" >}} $ less    {{< /highlight >}}
- allows a user to partially display content of a file

{{< highlight type="sh" warp="true" >}} $ more    {{< /highlight >}}
- has less options than *$ less*

{{< highlight type="sh" warp="true" >}} $ head    {{< /highlight >}}
- output the first part of files, default is first 10 lines

{{< highlight type="sh" warp="true" >}} $ tail    {{< /highlight >}}
- output the last part of files, default is last 10 lines   

###### Understanding Input and Output Redirection


|Input|Output|Error
|:-----:|:----:|:----:
0|1|2
|<|>, >>|2>
|$ out < in| $ in > out| $ in 2> errout
||$ in >> out |


###### Example Use Cases


{{< highlight type="sh" warp="true" >}} $ grep -i "error" < samplelog.txt   {{< /highlight >}}

Download sample file{{< download "/downloads/samplelog.txt" >}}here!{{< /download >}}

{{< highlight type="sh" warp="true" >}} $ ip a > pcinfo.txt    {{< /highlight >}}

{{< highlight type="sh" warp="true" >}} $ hostname >> pcinfo.txt    {{< /highlight >}}
{{< highlight type="sh" warp="true" >}} $ hostname123 2> errout.txt    {{< /highlight >}}



###### How to use pipes "|" in Linux

Using the "|" character is a form of redirection. It allows you to take output from one command to another. 

{{< highlight type="sh" warp="true" >}} $ cmd1 | cmd2 | cmd3 |.....|cmd_x    {{< /highlight >}}

Example Use Cases


{{< highlight type="sh" warp="true" >}} $ ip a | grep -i "inet" | awk '{print $1,$2}'
{{< /highlight >}}

The above example shows us how we use available tools on the system for redirection. 
We could also redirect this output to a text file to share. 


Redirections are very important to completing daily tasks in linux!

That's for lab 6

