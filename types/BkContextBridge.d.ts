interface BkContextBridge {
  readAppSettings(): Promise<BkAppSettings | null>;
  writeAppSettings(settings: BkAppSettings): Promise<void>;
  setCacheDir(): Promise<Electron.OpenDialogReturnValue | null>;
  showNotification(options: Electron.NotificationConstructorOptions);
  onNavigate: (callback: (route: string) => void) => void;
}
