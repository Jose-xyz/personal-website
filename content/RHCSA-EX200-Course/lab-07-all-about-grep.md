
+++
date = '2024-12-09T16:53:53-05:00'
draft = false
title = 'Lab 7: Grep with RegEx'
weight = 9
+++

{{< youtube xxxxxxxxxx >}}


##### Objective Focus
**Understand and use essential tools**
: Use grep and regular expressions to analyze text

[Official RHCSA EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam?section=objectives)

To begin, I want to point out the importance of focusing on the official objectives. 
Grep is a powerful tool and it can get complex quickly. 
Remember, the main thing is to gain familiarity with the tool and where to find help docs (aka Manual Pages). That will help keep us on track with passing the EX200. 

Grep helps us print lines that match patterns!

Download sample log to follow along{{< download "/downloads/sample_sysinfo.log" >}}here!{{< /download >}}


###### Basic *Grep* Syntax

{{< highlight type="sh" warp="true" >}} $ grep [OPTION...] [PATTERNS] [FILE...] {{< /highlight >}}
: Syntax for grep command 

{{< highlight type="sh" warp="true" >}} $ grep 'ERROR' sample_sysinfo.log {{< /highlight >}}
: Match for exact occurence of 'ERROR', grep is case sensitive

{{< highlight type="sh" warp="true" >}} $ grep '^2024-12-11'  sample_sysinfo.log {{< /highlight >}}
: Match start of a line (^)

{{< highlight type="sh" warp="true" >}} $ grep 'ted$' sample_sysinfo.log{{< /highlight >}}
: Match end of a line ($)

{{< highlight type="sh" warp="true" >}} $ grep '..:00:00' sample_sysinfo.log {{< /highlight >}}
: Match any single character (.)


{{< highlight type="sh" warp="true" >}} $ grep '10:[3-5]' sample_sysinfo.log {{< /highlight >}}
: Character classes [a-zA-Z] [0-9]

###### Options I use often

|Option|Action|
:----:|:----:
|-i|Ignore case|
|-r or -R| Search recursively in directories|
|-v|Invert the match, show lines that do not match the pattern.|
|-n|Show line numbers of matching lines|
|-l|Show only the filename with matches|
|-o|Show only the matching part of line|


For now, that's all for Grep!
