// The ONLY input of the vendor bundle. Re-exports the Tango (ya-webadb) APIs
// used by the page logic in docs/EN/SettingUpAaps/WebInstaller.md. Everything else is tree-shaken.
export { Adb, AdbDaemonTransport } from "@yume-chan/adb";
export { AdbDaemonWebUsbDeviceManager } from "@yume-chan/adb-daemon-webusb";
export { default as AdbWebCredentialStore } from "@yume-chan/adb-credential-web";
export { PackageManager } from "@yume-chan/android-bin";
