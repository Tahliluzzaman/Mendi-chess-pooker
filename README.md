# Mendi Chess Arena — Android APK project

This native Android WebView wrapper bundles the supplied offline HTML + JavaScript files inside the APK. It does not need internet to load the game.

## Build APK using GitHub on Android
1. Create a new GitHub repository, e.g. `Mendi-Chess-Arena`.
2. Upload all files and folders from this project, preserving their paths.
3. Open the repository's Actions tab.
4. Select **Build Mendi Chess Arena APK** and tap **Run workflow**. A push to `main` also starts a build.
5. Open the completed workflow run, scroll to Artifacts, and download `Mendi-Chess-Arena-debug-apk`.
6. Extract the artifact ZIP and install `app-debug.apk`. Android may ask permission to install unknown apps.

## Add a launcher logo later
The default Android launcher icon is intentionally used for the first test.
Later, create launcher icon assets from your PNG and add them under `app/src/main/res/mipmap-*`, then set `android:icon="@mipmap/ic_launcher"` in `app/src/main/AndroidManifest.xml`. Keep the icon bundled locally, not online.

## Notes
- No INTERNET permission is included.
- The app loads `file:///android_asset/index.html`; `app.js` is bundled beside it.
- Elo values are approximate difficulty targets, not certified playing ratings.
