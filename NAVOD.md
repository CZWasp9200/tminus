# Tmínus mimo claude.ai: návod krok za krokem

Hra pak poběží na vlastní adrese, zahraje si ji kdokoli s odkazem a žebříček bude sdílený. Všechno je zdarma.

Potřebuješ jen dvě věci: účet na GitHubu (hostování hry) a účet Google (databáze Firebase pro žebříček).

---

## Část A: hra na vlastní adrese (GitHub Pages)

**Krok 1.** Přihlas se na github.com. Vpravo nahoře klikni na **+** a zvol **New repository**.

**Krok 2.** Do pole *Repository name* napiš `tminus`. Nech zvolené **Public** a klikni na **Create repository**.

**Krok 3.** Na stránce nového repozitáře klikni na odkaz **uploading an existing file**. Přetáhni do okna **všechny soubory z této složky** (index.html, app.js, slova.js, firebase-config.js, sw.js, manifest.webmanifest, icon-192.png, icon-512.png). Dole klikni na **Commit changes**.

**Krok 4.** V repozitáři otevři **Settings**, vlevo **Pages**. V části *Branch* vyber **main** a složku **/ (root)**, klikni na **Save**. Asi za minutu se nahoře objeví adresa hry, například `https://tvojejmeno.github.io/tminus/`.

Hra už teď funguje, jen zatím bez online žebříčku. Na telefonu ji můžeš v prohlížeči přidat na plochu (menu prohlížeče → *Přidat na plochu*) a spouštět jako aplikaci.

---

## Část B: online žebříček (Firebase)

**Krok 5.** Otevři console.firebase.google.com a přihlas se účtem Google. Klikni na **Create a project** (Vytvořit projekt), pojmenuj ho `tminus` a projdi průvodcem. Google Analytics můžeš vypnout.

**Krok 6.** V projektu klikni na ikonu **</>** (Web app). Přezdívka aplikace: `tminus`. Klikni na **Register app**. Zobrazí se blok `firebaseConfig`. Z něj si opiš čtyři hodnoty: `apiKey`, `authDomain`, `projectId`, `appId`.

**Krok 7.** Na GitHubu otevři soubor **firebase-config.js**, klikni na ikonu tužky (Edit) a vlož ty čtyři hodnoty mezi uvozovky. Klikni na **Commit changes**.

**Krok 8.** Ve Firebase vlevo otevři **Build → Authentication**, klikni na **Get started**, v záložce *Sign-in method* zvol **Anonymous** a zapni ho (**Enable**, **Save**).

**Krok 9.** Vlevo otevři **Build → Firestore Database**, klikni na **Create database**. Vyber umístění **eur3 (Europe)** a režim **production**. Pak otevři záložku **Rules**, smaž, co tam je, vlož celý obsah souboru **firestore.rules** z této složky a klikni na **Publish**.

**Krok 10.** Otevři svou hru, klikni na **Pilot**. Dole se ukáže **ID pilota**, to je tvoje ID. Zkopíruj ho a vlož ho:
- do souboru **firebase-config.js** na GitHubu do `adminUid`,
- do pravidel ve Firebase (záložka **Rules**) místo `SEM_TVOJE_ID`, a znovu klikni na **Publish**.

Tím budeš ve hře vidět záložku **Hlášení** v žebříčku a můžeš schvalovat slova, která hráči nahlásí.

**Hotovo.** Pošli kamarádům adresu z kroku 4.

---

## Nová verze hry

Když ti pošlu novou verzi, nahraj na GitHub znovu soubory **app.js** a **index.html** (stejně jako v kroku 3). V souboru **sw.js** zvyš číslo `tminus-v1` na `tminus-v2` atd., aby si telefony stáhly novou verzi. Soubor firebase-config.js nepřepisuj.

## Když něco nejde

- Žebříček se nenačítá: zkontroluj krok 7 (hodnoty v uvozovkách) a krok 8 (zapnutý Anonymous).
- Výsledky se neukládají: zkontroluj krok 9 (pravidla jsou publikovaná).
- Hra se po nahrání nové verze nemění: zavři a znovu otevři stránku, případně zvyš číslo v sw.js.
