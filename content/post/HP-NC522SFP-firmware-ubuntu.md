+++
title = "HP NC522SFP Network Adapter Firmware update on Ubuntu"
description = ""
date = 2019-09-29
weight= 2

tags = [
    
    "firmware",
    "driver",
    "Qlogic",
    "Netxen",
]
categories = [
    "NIC",
    "Firmware",
]
+++

I was trying to add dual port 10gb network adapter (HP NC522SFP which is [rebranded vserion of Qlogic QLE3142](https://driverdownloads.qlogic.com/QLogicDriverDownloads_UI/HP.aspx?companyid=4) ). Infact, this 10gb intelligent adapter series is of  NetXen (aquired by Qlogic).
After installing network adapter, it was not recognized. 
`$ lshw -C network` indicated networks **UNCLAIMED**.       
`$ ifconfig ` didn't show them either.        
 I was sure either driver or firmware was missing. I checked from [HP product page](https://support.hpe.com/hpsc/doc/public/display?docId=emr_na-c01720419), but it included driver and firmware for Windows, Redhat and SUSE OS.       
 Then I went to [Qlogic driver downloads](http://driverdownloads.qlogic.com/QLogicDriverDownloads_UI/). Interestingly, QLE3142 was missing from their series of intelligent network adapters.    
 Then I   tried to check if my OS(Ubuntu) doesn't has driver or firmware or both. I knew this particular hardware was of netxen. So,

## Driver Test

 ```
 $ cd /lib/modules/5.0.0-29-generic/kernel/drivers/net/ethernet/qlogic/netxen 
 ``` 
 indicated that i had driver `netxen_nic.ko` installed. So, i needed to upgrade firmware. 

### Note : my kernal version = 5.0.0-29-generic    

 I started searching for firmware. HP product page had firmware in rpm (redhat package manager). I tried to convert rpm to debian using [alien](https://wiki.debian.org/Alien). couldn't compile it. 
## Firmware Solution 

 I found that broadcom also had NetXtreme || 57xxx Dual-Port 10GbE SFP+ series. And Infact, [Broadcom 57810S](https://www.dell.com/en-us/work/shop/cty/broadcom-57810s-dual-port-10gbe-sfp-cna-details/spd/broadcom-57810s-dual-port-10gbe-sfp) is quite similar to HP NC522SFP(Qlogic QLE3142).       
 And I found that NetXtreme || 57xxx used **bnx2x** [firmware](http://driverdownloads.qlogic.com/QLogicDriverDownloads_UI/SearchByProduct.aspx?ProductCategory=336&Product=1244&Os=175#49). Then i tried to find debian package for bnx2x or other **non-free** firmware.
 Luckily, i found this package [firmware-bnx2x](https://packages.debian.org/stretch/all/firmware-bnx2x). Scroll down, click on **all** select the [relevent] file and click on it. It will start downloading.       
## Solution  

### Download the firmware    
 ```
 $ wget http.us.debian.org/debian/pool/non-free/f/firmware-nonfree/firmware-bnx2x_20161130-5_all.deb
 ```
### install the package    
 ```
 $ sudo dpkg -i --force-overwrite firmware-bnx2x_20161130-5_all.deb
 ```    
 **Note: This should pass the `--force-overwrite` flag to the underlying dpkg instance which will tell dpkg to overwrite one package's file with anothers.** 

## reboot   