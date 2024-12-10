export default function install({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
       <pre style="word-wrap: break-word; white-space: pre-wrap;">
#!/bin/bash

# Set Alt+Q to switch input sources
gsettings set org.gnome.desktop.wm.keybindings switch-input-source "['<alt>q']"
gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "['<shift><alt>q']"

echo "Input source switching shortcut set to Alt+Q"
         </pre>
      </body>
    </html>
  );
}




