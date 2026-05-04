Set WshShell = CreateObject("WScript.Shell")

' Change directory to the parent folder where package.json is located
Set objFSO = CreateObject("Scripting.FileSystemObject")
strPath = objFSO.GetParentFolderName(WScript.ScriptFullName)
strParentPath = objFSO.GetParentFolderName(strPath)

' Run npm run dev silently in the background
WshShell.Run "cmd.exe /c cd /d """ & strParentPath & """ && npm run dev", 0, False

' Wait 3 seconds for the server to spin up
WScript.Sleep 3000

' Open the development server specifically in Google Chrome
WshShell.Run "chrome.exe http://localhost:5173", 1, False
