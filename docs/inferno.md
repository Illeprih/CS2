## T

Inferno má trochu netypický layout tím, že rotace nejsou přes mid a jsou celkově velice pomalé. Zároveň ale není úplně snadné dobýt sity - to z Inferna dělá jednu z mála map, kde umí být fake velice efektivní strategie.  

### Default

  Základní rozestavení je:

  * 2 banán
  * 1 rampa/underpass
  * 2 second mid

  Pokud CT nehrají banán extrémně pasivně, tak se to v jednom získat nedá. Appy se taky v jednom moc nedají, nejde například kouknout k balkónu bez toho, aby nehrozil push z boileru a ideálně je to úhel, který se peekuje z obou stran.  
  Rampa je trochu nevděčná pozice, ale když chce někdo na fernu za Tčka hrát AWPčko, tak to má mít. Lepší je rovnou skákat do underpassu, ale zase záleží na tom, jestli CT hází granáty, anebo ne.  
  Hlaví cíle jsou získat banán a zamezit agresi na second mid. Následně, když je banán pod kontrolou, chceme získat appy a top mid. Top mid má docela dlouhé a otevřené koridory, tudíž jsou CT nuceni hrát pasivněji; cíl tedy není proběhnout přes top mid na Ačko, ale vytlačit CT z top midu do silnějších pozic na situ.  
  Ideální setup by měl skončit například takhle:  

  ![](images/inferno/t/default.avif){ .glightbox }

#### Banana

  Hlavní cíle jsou nedat CTčkům kontrolu nad autem a počítat granáty. Od auta je to k plantu opravdu kousek, takže když se CT vyhází a nedrží auto, tak vždycky může přijít hodně rychlý execute na Bčko. Pokud mají CT auto, jeden může v klidu stáhnout na spawn a Tčka mají mnohem méně možností.  
  Ideální je hodit molotov na auto o stěnu; ten přímo na auto nemusí vždy dohořet až úplně dozadu a CT to potom může s flashem vyběhnout.  

  ![](images/inferno/t/b/car_molotov.avif){ .glightbox }

  Většina lidí má tendenci házet granáty spíš za dřeva, takže je na začátku lepší stát spíš na pravé straně, než za barely.  
  Pokud chcete zapálit sandbag, je to potřeba házet co nejvíce na roh, jinak to nedohoří až úplně do rohu a to CT tam za tím není moc vidět.  

  ![](images/inferno/t/b/sandbag_molotov.avif){ .glightbox }

  Zároveň není moc ideální skákat na auto dokud není čistý sandbag. Dá se tam hrát úhel, kde CT není vidět dokud nevyskočíte nahoru a má tam dost free kill.  

  ![](images/inferno/t/b/wrong_sandbag_peek_1.avif){ .glightbox data-gallery="wrong_sandbag_peek" }

  ![](images/inferno/t/b/wrong_sandbag_peek_2.avif){ .glightbox data-gallery="wrong_sandbag_peek" }

  
  Celkově se u auta není dobrý extra zdržovat, dá se tam hodit spousta granátů, flashů atd., lepší je zůstávat spíš u zíďky, nebo vyhodit někoho nahoru. To je jednak dobrý off-angle a jednak ta malá stříška blokuje většinu flashů, takže když chtějí CT získat zpět banán, je velká pravděpodobnost, že to CT vyběhne s flashem ze široka a nebude vás tam čekat.  

  ![](images/inferno/t/b/halfwall_boost_peek.avif){ .glightbox data-gallery="halfwall_peek" }

  ![](images/inferno/t/b/halfwall_boost_flash.avif){ .glightbox data-gallery="halfwall_peek" }

  Když CT stáhnou do situ, jeden může rotovat zpátky na mid a pomoct dobýt top mid, ale pozor, ještě u barelů vás může CT slyšet dupat. Zároveň není od věci občas udělat u auta nějaký bordel a snažit se z CTček vytáhnout smoky. Dá se například hodit granát na CT nebo coffiny.  

  * Granát na CT  
  `jumpthrow`  
  `setpos 430.315491 1773.837646 240.000000;setang 14.893995 62.027634 0.000000`  

  ![](images/inferno/t/b/ct_nade.avif){ .glightbox }

  * Granát na coffin  
  `walking jumpthrow`  
  `setpos 388.828796 1806.964111 240.000000;setang 8.865865 80.816093 0.000000`  

  ![](images/inferno/t/b/coffin_nade.avif){ .glightbox }
  
  Kvůli načasování granátů je potřeba aby na banán šel někdo z krajních spawnů. Většina granátů a molotovů hozených přes half wall je dost k ničemu, ale ze špatného spawnu to člověk stejně schytá.

#### Ramp/Underpass

  Jedna z nejdůležitějších věcí je info o smoku na mid. Pokud CT hodí FaZe smoke (k underpassu), nebo molotov, Tčka na second midu to potřebují vědět, protože je pravděpodobné, že se CT pokusí o nějaký push.  
  Čím víc času uplyne, tím zbytečnější tahle pozice je, takže většinou vcelku rychle rotuje na top mid, případně pomáhá na banánu.

#### Second mid

  První hráč na second midu by měl hodit molotov do appů. Dá se to sice držet z mostu, ale to je pozice, která je daleko od všeho, takže je lepší to prostě zapálit.  

  `running jumpthrow`  
  `setpos -417.188477 -82.886597 36.000000;setang -0.044112 3.128783 0.000000` 

  ![](images/inferno/t/second_mid/apps_molotov.avif){ .glightbox }

  CT mají lepší timing na pick na second mid, pokud házejí FaZe smoke, molotov na rampu nebo je na rampě AWPčko, tak už tam CT klidně může stát.

  ![](images/inferno/t/second_mid/second_mid_peek.avif){ .glightbox }
  
  Pokud si CT hodí smoke na top mid, není moc důvod za ním stát - lepší je rovnou vyskočit do okna a pomoct vyčistit appy.

#### Apps

  Appy se nedají v jednom efektivně vyčistit, takže pokud není druhý hráč v okně, snažit se zabrat pozice v appech je dost riskantní, vždycky si můžete pokrýt buďto chodbu od balkónu, nebo boiler. Proto pokud jste tam solo, tak vám nezbyde než budťo držet schody, anebo nějaký off-angle ze second midu (dá se to držet z T appů, když jsou CT hodně agresivní, ale má to stejný problém, jako když držíte okno z mostu, jste prostě hrozně daleko od všeho).

  ![](images/inferno/t/apps/apps_offangle.avif){ .glightbox }  

  Pro CT je vyběhnout appy přes schody celkem nepříjemné. Pokud to vyběhnou, musí zkontrolovat spoustu úhlů na second midu, takže tohle je duel, který byste měli vždycky vyhrát. Zároveň vždycky uslyšíte, když skočí dolů z okna.  

  Pokud chcete jít na schody, nespěchejte. Vždycky tam někdo může stát za rohem s vrtačkou. Lepší je to protít s pauzama postupně.  

  Ve dvou pak jeden vyčistí boiler a následně oba chodbu od balkónu. Pokud to CT drží správně, tak se budou snažit to vykouknout na timing, takže to chvilku podržte. Jeden pak zůstává v appech a druhý jde do boileru pomoct s midem.  
  (V boileru se snažte vždycky držet u stěny s midem. Vyhnete se tak off anglu z midu a zároveň pak máte lepší úhel na short)  

  * Quad molotov  
  `running throw`  
  `setpos 1207.989258 217.128540 180.761261;setang -2.926031 59.061108 0.000000`  

  ![](images/inferno/t/apps/quad_molotov.avif){ .glightbox data-gallery="t_apps_boiler }

  * Short flash  
  `left click throw`  
  `setpos 1240.660889 223.595245 226.313324;setang 18.127991 69.866325 0.000000`  

  ![](images/inferno/t/apps/short_flash.avif){ .glightbox data-gallery="t_apps_boiler }  

  Z appů byste neměli jít na site jako první. Váš hlavní úkol by měl být vypálit pit a flashnout site, následně se ale spíš snažíte o případný refrag a zkontrolování beden na situ.  

  * Pit molotov  
  `crouch throw`  
  `setpos 1567.772705 -377.959229 252.000000;setang -5.478065 23.604736 0.000000`  

  ![](images/inferno/t/apps/pit_molotov.avif){ .glightbox data-gallery="t_apps_exec" }

  * Site flash  
  `crouch throw`  
  `setpos 1567.772705 -377.959229 252.000000;setang -26.311995 -28.051134 0.000000`  

  ![](images/inferno/t/apps/site_flash.avif){ .glightbox data-gallery="t_apps_exec" }

  Když se zaseknete v appech a potřebujete vyjít site, dá se hodit lurk smoke, který vám umožní izolovat úhly z pitu a balkónu a zároveň můžete vyskočit na zábradlí a kouknut do situ, nebo na short. Ze zadní poloviny situ je vidět jenom hlava, takže když přijde na lámání chleba, tak můžete zkusit překvapit.  

  * Lurk smoke  
  `left click throw`  
  `setpos 1608.421387 -274.562866 270.000000;setang -9.196028 -47.055454 0.000000`

  ![](images/inferno/t/apps/lurk_smoke.avif){ .glightbox data-gallery="t_apps_lurk_smoke" }

  ![](images/inferno/t/apps/lurk_smoke_ct.avif){ .glightbox data-gallery="t_apps_lurk_smoke" }
  

#### Dobytí top midu

  Dobytí top midu není nic složitého. CT mají velice málo pozic, ze kterých se dá top mid držet, a všechny se dají snadno neutralizovat pomocí granátů.
  
<div class="img-grid-2" markdown>

![](images/inferno/t/top_mid/ct_hold.avif){ .glightbox data-gallery="t_top_mid" }

![](images/inferno/t/top_mid/utility.avif){ .glightbox data-gallery="t_top_mid" }

</div>  

  Základním prvkem je smoke na long. Smoky, které dopadnou blízko se se příliš snadno spamují a rozbíjejí a pointou je získat prostor, takže čím dál smoke dopadne, tím lepší.  

  * Long smoke:  
  `left click throw`  
  `setpos 848.960510 308.665283 106.963165;setang -37.905621 42.835117 0.000000`  

  ![](images/inferno/t/top_mid/long_smoke.avif){ .glightbox }

  Quad se dá velice snadno vypálit jak z midu, tak z boileru a protože na shortu se nedá za nic schovat, tak i "špatné" flashe, co dopadnou ke stěně za boiler, vytlačí CT do pasivnějších pozic.  

  * Quad molotov
  `running jumpthrow`  
  `setpos 1103.470337 447.031250 119.670898;setang -21.801952 59.467880 0.000000`  

  ![](images/inferno/t/top_mid/quad_molotov.avif){ .glightbox }

  * Short flash  
  Není potřeba aby byl nějak přesný, cokoliv co padá ke stěně za boiler je ok
  `left click throw`  
  `setpos 1075.9464111328125 587.9678955078125 121.976715; setang -18.1501 -35.59192`  

  ![](images/inferno/t/top_mid/short_flash.avif){ .glightbox }

### A

  Ačko se dobývá primárně přes short. Na site se musí projít přes tvz. "zónou smrti".

  ![](images/inferno/t/a/kill_zone.avif){ .glightbox }

  CT můžou držet tolik různých poziček, že to prostě musíte poslat a doufat, že vás případně někdo tradne. Proto, dokud jsou všichni CT naživu, nemá smysl chodit přes long. Hlavní je dobýt site. Retake na Infernu není jednoduchý, takže trade na shortu, nebo jenom zabrání pozičky na Ačku/v pitu udělá mnohem víc, než lurk kill z longu.  
  Dvě nejdůležitější věci jsou moto smoke a molotov do pitu.  

  * Moto smoke  
  `left click throw`  
  `setpos 1010.614929 447.183289 112.232086;setang -37.993710 12.974021 0.000000`  

  ![](images/inferno/t/a/moto_smoke.avif){ .glightbox }

  * Pit molotov  
  Ne vždycky dohoří až úplně do rohu, ale CT tam chytá flashe, takže to nijak extra nevadí, důležitější je aby se tam CT nemohlo schovávat. Některé profesionální teamy, z toho důvodu, hází podobný molotov i z appů.
  `running throw`
  `setpos 1322.031860 230.793213 149.390625;setang -11.703787 -24.469584 0.000000`

  ![](images/inferno/t/a/pit_molotov.avif){ .glightbox }

  Další možná utilita je:  

  * Balcony molotov  
  `jumpthrow`  
  `setpos 1201.219727 587.968750 130.511703;setang -1.759999 -45.391571 0.000000`  

  ![](images/inferno/t/a/balcony_molotov.avif){ .glightbox }

  * Site flash  
  `left click throw`  
  `setpos 1322.069946 250.357101 144.046875;setang -15.114158 -29.917601 0.000000`  

  ![](images/inferno/t/a/site_flash.avif){ .glightbox }

  Pokud ale už padl nějaký open frag/trade, situace se zásadně mění. CT už nejsou schopní efektivně pokrýt long a A site zároveň. Ve čtyřech na tp musí hrát pouze jednoho na B, ve třech už prostě musí něco pustit.  
  Z toho důvodu umí být dost nepříjemný smoke mezi arch a knihovnu. Hrozba je, že projdeme na CT spawn, hráč co drží long je tedy v situaci, kdy potřebuje držet CT spawn, ale zároveň tím izoluje hráče na A, tudíž umí být velice efektivní fake hodit tenhle smoke a instantně walkovat na short.

  ![](images/inferno/t/a/3v3.avif){ .glightbox }

  * Long smoke  
  `jumpthrow`
  `setpos 1512.968750 909.958252 160.309341;setang -26.509966 165.786270 0.000000`

  ![](images/inferno/t/a/3v3_smoke.avif){ .glightbox }

### B

  Execute na B hodně záleží na infu z banánu. Čím méně granátů CT mají, tím méně toho můžou udělat proti rozhození Bčka. Zároveň, protože "základní granáty" může hodit jeden hráč z relativně bezpečné pozice, tak umí být relative efektivní B fake. Inferno má dost pomalé rotace, takže CT jsou často nuceni rotovat brzo a tudíž Tčka můžou čekat na top midu a čekat na rotaci, když jeden rozhodí Bčko z banánu.

  * CT smoke  
  Padá na boost, takže se dá bezpečně vyskočit na jedničku, což je dobrý off-angle na trojku a celkově dobrá pozice na trade  
  `middle click W jumpthrow`  
  `setpos 369.515747 1664.031250 146.453186;setang -13.662132 64.257309 0.000000`  

  ![](images/inferno/t/b/ct_smoke.avif){ .glightbox data-gallery="b_default_util" }
      
  * Coffin smoke  
  `running jumpthrow`  
  `setpos 369.513367 1664.031250 146.453186;setang -1.518130 85.267334 0.000000` 

  ![](images/inferno/t/b/coffin_smoke.avif){ .glightbox data-gallery="b_default_util" }
      
  * God flash  
  Flashuje CT, coffiny a prakticky celý site. Ideální první flash  

  `left click throw`  
  `setpos 369.491302 1664.062744 146.453186;setang -30.139896 77.633858 0.000000`  

  ![](images/inferno/t/b/god_flash.avif){ .glightbox data-gallery="b_default_util" }
      
  * Entry flash  
  Bouchá nad balkónkem, takže neflashne nikoho z banánu  
  `left click throw`  
  `setpos 393.742340 1707.774170 147.468765;setang -22.857903 58.273796 0.000000`  

  ![](images/inferno/t/b/balcony_flash.avif){ .glightbox data-gallery="b_default_util" }

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/7rD2I8G-0vY"
    title="B Execute"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;">
  </iframe>
</div>

  Alternativně se dá smoke hodit hlouběji do kostela a na coffiny molotov a následně kostel dobýt a nehrát post-plant jenom ze situ.

  * Smoke a molotov na coffiny  
  `left click throw`  
  `setpos 430.304230 1773.862915 240.000000;setang -18.457699 90.286758 0.000000`  

  ![](images/inferno/t/b/coffin_smoke_deep.avif){ .glightbox data-gallery="halfwall_b_util" }

  `jumpthrow`  
  `setpos 430.304230 1773.862915 240.000000;setang 8.162273 86.414711 0.000000`  

  ![](images/inferno/t/b/coffin_molotov.avif){ .glightbox data-gallery="halfwall_b_util" }

  * Flash za fontánu  
  Bouchá za fontánou, takže musí být člověk až v poolu, aby ho to flashlo. Být na jedničce je furt ok  
  `left click throw`  
  `setpos 430.304230 1773.862915 240.000000;setang -15.267741 96.116951 0.000000`  

  ![](images/inferno/t/b/fountain_flash.avif){ .glightbox data-gallery="halfwall_b_util" }

  Až na kostel se to dá hodit i od dřeva, ale je to o trochu horší pozička. Varianta pro to, když vám příliš vadí Tčko vyhozené na zídce.

  * CT smoke  

  `left click throw`  
  `setpos 120.585464 1593.889404 119.996689;setang -33.153034 59.036907 0.000000`  

  ![](images/inferno/t/b/ct_smoke_alt.avif){ .glightbox data-gallery="b_default_alternative" }

  * God flash  

  `jumpthrow`  
  `setpos 120.585464 1593.889404 119.996689;setang -1.429045 63.656868 0.000000`  

  ![](images/inferno/t/b/god_flash_alt.avif){ .glightbox data-gallery="b_default_alternative" }

  * Entry flash  

  `w jumpthrow`  
  `setpos 120.585464 1593.889404 119.996689;setang 2.068954 49.444851 0.000000`  

  ![](images/inferno/t/b/entry_flash_alt.avif){ .glightbox data-gallery="b_default_alternative" }
  
## CT

### Default

### A

### B

##### Boj o banán

##### Retake banánu

##### Hra ze situ
