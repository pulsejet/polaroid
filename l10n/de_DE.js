OC.L10N.register(
    "memories",
    {
    "Memories" : "Erinnerungen",
    "Yet another photo management app" : "Eine weitere Foto-Management-App",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🤖 AI Tagging**: Group photos by people and objects using AI, powered by the [recognize](https://github.com/nextcloud/recognize) app.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Erinnerungen\n\n* **📸 Foto- und Video-Timeline**: Sortiert Fotos nach Aufnahmedatum, geparst aus Exif-Daten.\n* **🤔 Kurze Zusammenfassung**: Springe sofort zu einer beliebigen Stelle in der Timeline.\n* **🖼️ Ordner**: Durchsuchen Sie Ihre und freigegebenen Ordner mit einer ähnlichen, effizienten Zeitachse.\n* **🎦 Diashow**: Zeigen Sie ganz einfach Fotos aus Ihrer Chronik und Ihren Ordnern an.\n* **📱 Mobiler Support**: Erleben Sie Ihre Erinnerungen auf Geräten jeder Form und Größe über die Web-App noch einmal.\n* **🗑️ Papierkorb**: Mehrere Fotos und Videos gleichzeitig auswählen und löschen.\n* **✏️ Metadaten bearbeiten**: Bearbeiten Sie Exif-Daten auf Fotos schnell und einfach.\n* **📦 Archiv**: Speichern Sie Fotos, die Sie nicht in Ihrer Chronik sehen möchten, in einem separaten Ordner.\n* **⚡️ Schnell**: Memories ist extrem schnell. Zeitraum.\n\n## 🚀 Installation\n\n1. Installieren Sie die App aus dem Nextcloud App Store\n1. ⚒️ Installieren Sie `exiftool` (siehe unten).\n1. Führen Sie `php ./occ memory:index` aus, um Metadaten-Indizes für vorhandene Fotos zu generieren.\n1. Öffne die App 📷 Erinnerungen in Nextcloud und lege das Verzeichnis mit deinen Fotos fest. Fotos aus diesem Verzeichnis werden in der Timeline angezeigt, einschließlich aller Fotos in verschachtelten Unterverzeichnissen.\n1. Die Installation des [Vorschaugenerators](https://github.com/rullzer/previewgenerator) zum Vorgenerieren von Miniaturansichten wird dringend empfohlen.\n\n## 🔨 Installieren von Abhängigkeiten\nDie genauen Schritte hängen von Ihrer Nextcloud-Plattform ab. Wenn Sie Docker für Ihre Nextcloud-Instanz verwenden, können Sie Exiftool mithilfe eines benutzerdefinierten Docker-Images installieren.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Zeitleiste",
    "Folders" : "Ordner",
    "Favorites" : "Favoriten",
    "Videos" : "Videos",
    "People" : "Personen",
    "Archive" : "Archiv",
    "On this day" : "An diesem Tag",
    "Tags" : "Schlagworte",
    "Settings" : "Einstellungen",
    "Cancel" : "Abbrechen",
    "Delete" : "Löschen",
    "Download" : "Herunterladen",
    "Favorite" : "Favorisieren",
    "Unarchive" : "Dearchivieren",
    "Edit Date/Time" : "Datum/Uhrzeit bearbeiten",
    "View in folder" : "In Ordner anzeigen",
    "Remove from person" : "Von der Person entfernen",
    "You are about to download a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien herunterzuladen. Sind Sie sich sicher?",
    "You are about to delete a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien zu löschen. Sind Sie sich sicher?",
    "You are about to touch a large number of files. Are you sure?" : "Sie sind im Begriff, eine große Anzahl von Dateien zu ändern. Sind Sie sich sicher?",
    "_{n} selected_::_{n} selected_" : ["{n} ausgewählt","{n} ausgewählt"],
    "Timeline Path" : "Pfad der Zeitleiste",
    "Show hidden folders" : "Zeige versteckte Ordner",
    "Update" : "Aktualisieren",
    "Error updating settings" : "Fehler bei der Aktualisierung der Einstellungen",
    "Your Timeline" : "Ihre Zeitleiste",
    "Failed to load some photos" : "Laden einiger Fotos fehlgeschlagen",
    "Cannot find this photo anymore!" : "Kann dieses Foto nicht mehr finden!",
    "Update Exif" : "Exif aktualisieren",
    "Newest" : "Neueste",
    "Year" : "Jahr",
    "Month" : "Monat",
    "Day" : "Tag",
    "Time" : "Zeit",
    "Hour" : "Stunde",
    "Minute" : "Minute",
    "Oldest" : "Älteste",
    "Processing … {n}/{m}" : "Verarbeite… {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "Diese Funktion ändert Dateien in Ihrem Speicher, um Exif-Daten zu aktualisieren.",
    "Exercise caution and make sure you have backups." : "Seien Sie vorsichtig und stellen Sie sicher, dass Sie Backups haben.",
    "Loading data … {n}/{m}" : "Daten werden geladen… {n}/{m}",
    "Remove person" : "Person entfernen",
    "Are you sure you want to remove {name}" : "Möchten Sie {name} wirklich entfernen?",
    "Failed to delete {name}." : "Fehler beim Löschen von {name}.",
    "Rename person" : "Person umbenennen",
    "Name" : "Name",
    "Failed to rename {oldName} to {name}." : "Fehler beim Umbenennen von {oldName} in {name}.",
    "Merge {name} with person" : "{name} mit Person zusammenführen",
    "Are you sure you want to merge {name} with {newName}?" : "Sind Sie sicher, dass Sie {name} mit {newName} zusammenführen möchten?",
    "Too many failures, aborting" : "Zu viele Fehler, Abbruch",
    "Error while moving {basename}" : "Fehler beim Verschieben von {basename}",
    "Failed to move {name}." : "{name} konnte nicht verschoben werden.",
    "Back" : "Zurück",
    "Merge with different person" : "Mit einer anderen Person zusammenführen",
    "Failed to delete files." : "Löschen der Dateien fehlgeschlagen.",
    "Failed to delete {fileName}." : "{fileName} konnte nicht gelöscht werden.",
    "General Failure" : "Allgemeiner Fehler",
    "Error: {msg}" : "Fehler: {msg}",
    "Failed to favorite {fileName}." : "{fileName} konnte nicht zu den Favoriten hinzugefügt werden.",
    "Failed to favorite files." : "Favorisieren von Dateien fehlgeschlagen."
},
"nplurals=2; plural=(n != 1);");
