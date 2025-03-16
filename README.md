# petrADi
petrADi website

https://petradi-lesvos.com

also https://petradi-lesvos.gr redirects to .com


https://console.firebase.google.com/project/petradi-71570/overview
https://dash.cloudflare.com/f017997a508e993a083b219fd9579ced/home/domains

do the following:



# website
https://petradi-lesvos.com/


Open visual studio code (VSC). 
Open a terminal within VSC

## GitHub

go to petrADi folder
<code>git pull</code>
<code>git add .</code>
<code>git commit -m 'some explanation'</code>
<code>git push origin main</code>


Use firebase CLI to deploy. Steps:
go with the command line to the folder where we have the site code i.e. website

<code>firebase logout</code>
<code>firebase login</code> (follow steps) THEN GO TO THE FOLDER YOU HAVE THE PROJECT (IE WEBSITE)
<code>firebase use --add</code> (go to petradi-71570) or <code>firebase use petradi-71570<code> # if it asks you for an alias put whataver for example hotel
<code>firebase deploy</code>
