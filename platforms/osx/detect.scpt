tell application "System Events"
  set frontApp to name of first application process whose frontmost is true
end tell
tell application frontApp
  set window_name to frontApp
  try
    if the (count of windows as list) is not 0 then
      set window_name to name of front window
    end if
  on error
    set window_name to frontApp
  end try
end tell
