# WireGuard Controller Desklet for Linux Mint Cinnamon

The WireGuard Controller Desklet is a simple and intuitive graphical tool tailored for the Linux Mint Cinnamon desktop. It allows users to easily monitor and manage their WireGuard VPN connections directly from the desktop.

![WireGuard Controller Desklet Screenshot](path_to_screenshot.png) *(Replace with actual screenshot path)*

## Features

- **Status Indicator:** See your WireGuard connection status at a glance with clear green (connected) and red (disconnected) indicators.
- **One-click Connect/Disconnect:** Toggle your VPN connection with a single click.
- **Configurable Interface:** Easily add, delete, or switch between different WireGuard interfaces from the settings menu.
- **Instructional Guide:** A built-in guide for managing interfaces effectively.

## Installation

1. **Clone or Download the Repository:**  
   ```bash
   git clone https://github.com/prodata2000/wireguard-controller-desklet.git
   ```

2. **Move the Desklet to the Cinnamon Desklets Directory:**  
   Navigate to the downloaded directory and move the `wireguard-controller@SparkForge` folder to the `.local/share/cinnamon/desklets/` directory in your home folder.

   ```bash
   mv wireguard-controller@SparkForge ~/.local/share/cinnamon/desklets/
   ```

3. **Activate the Desklet:**  
   Right-click on your desktop, choose 'Add desklets', navigate to the 'Downloaded' tab, and you should see the WireGuard Controller Desklet. Add it to your desktop.

## Configuring `wg-quick` without a Password Prompt

To allow `wg-quick` to run without prompting for a password, you'll need to modify the sudoers file.

1. Open a terminal and type `sudo visudo` to edit the sudoers file.
2. Add the following line at the end of the file (replace `yourusername` with your actual username):

   ```bash
   yourusername ALL=NOPASSWD: /usr/bin/wg-quick
   ```

3. Save the file and exit. This will allow the `wg-quick` command to run without a password prompt for the specified user.

**⚠️ Warning:** Modifying the sudoers file can be risky. Always make sure you know what you're doing and understand the implications. Giving NOPASSWD access can be a security risk if not managed carefully.

## Usage

Once installed, the desklet will show on your desktop. Click on it to toggle the WireGuard connection. Use the settings menu (right-click on the desklet and choose 'Configure') to add, delete, or switch WireGuard interfaces and to read instructions.

## Contribution

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, open a pull request.

## License

[MIT License](LICENSE.txt)

---

You can save this content in a `README.md` file in your project's root directory. Make sure to adjust paths, URLs, and other specifics to match your actual project setup.
