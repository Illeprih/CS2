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

  ![](images/inferno/t/banana/car_molotov.avif){ .glightbox }

  Většina lidí má tendenci házet granáty spíš za dřeva, takže je na začátku lepší stát spíš na pravé straně, než za barely.  
  Pokud chcete zapálit sandbag, je to potřeba házet co nejvíce na roh, jinak to nedohoří až úplně do rohu a to CT tam za tím není moc vidět.  

  ![](images/inferno/t/banana/sandbag_molotov.avif){ .glightbox }

  Zároveň není moc ideální skákat na auto dokud není čistý sandbag. Dá se tam hrát úhel, kde CT není vidět dokud nevyskočíte nahoru a má tam dost free kill.  

  ![](images/inferno/t/banana/wrong_sandbag_peek_1.avif){ .glightbox data-gallery="wrong_sandbag_peek" }

  ![](images/inferno/t/banana/wrong_sandbag_peek_2.avif){ .glightbox data-gallery="wrong_sandbag_peek" }

  
  Celkově se u auta není dobrý extra zdržovat, dá se tam hodit spousta granátů, flashů atd., lepší je zůstávat spíš u zíďky, nebo vyhodit někoho nahoru. To je jednak dobrý off-angle a jednak ta malá stříška blokuje většinu flashů, takže když chtějí CT získat zpět banán, je velká pravděpodobnost, že to CT vyběhne s flashem ze široka a nebude vás tam čekat.  

  ![](images/inferno/t/banana/halfwall_boost_peek.avif){ .glightbox data-gallery="halfwall_peek" }

  ![](images/inferno/t/banana/halfwall_boost_flash.avif){ .glightbox data-gallery="halfwall_peek" }

  Když CT stáhnou do situ, jeden může rotovat zpátky na mid a pomoct dobýt top mid, ale pozor, ještě u barelů vás může CT slyšet dupat. Zároveň není od věci občas udělat u auta nějaký bordel a snažit se z CTček vytáhnout smoky. Dá se například hodit granát na CT nebo coffiny.  

###### Granát na CT  { .grenade-h }
  `jumpthrow`  
  `setpos 430.315491 1773.837646 240.000000;setang 14.893995 62.027634 0.000000`  

  ![](images/inferno/t/banana/ct_nade.avif){ .glightbox }

###### Granát na coffin  { .grenade-h }
  `walking jumpthrow`  
  `setpos 388.828796 1806.964111 240.000000;setang 8.865865 80.816093 0.000000`  

  ![](images/inferno/t/banana/coffin_nade.avif){ .glightbox }
  
  Kvůli načasování granátů je potřeba aby na banán šel někdo z krajních spawnů. Většina granátů a molotovů hozených přes half wall je dost k ničemu, ale ze špatného spawnu to člověk stejně schytá.  

  Pokud CT hrají banán extrémně agresivně, hází granáty ve třech atd., tak je varianta hodit smoke na auto a následně si banán flashnout, až dohoří CT molotovy.  

###### Car smoke  { .grenade-h }
  `w jumpthrow`  
  `setpos -1362.451904 141.031906 -50.000000;setang -46.969734 40.215946 0.000000
  noclip ON`  

  ![](images/inferno/t/banana/car_smoke.avif){ .glightbox data-gallery="t_banana_late_take}

###### Banana flash  { .grenade-h }
  `middle click jumpthrow`  
  `setpos -375.160706 756.505005 5.888855;setang -27.521667 43.207752 0.000000`  

  ![](images/inferno/t/banana/flash.avif){ .glightbox data-gallery="t_banana_late_take}

#### Ramp/Underpass

  Jedna z nejdůležitějších věcí je info o smoku na mid. Pokud CT hodí FaZe smoke (k underpassu), nebo molotov, Tčka na second midu to potřebují vědět, protože je pravděpodobné, že se CT pokusí o nějaký push.  
  Čím víc času uplyne, tím zbytečnější tahle pozice je, takže většinou vcelku rychle rotuje na top mid, případně pomáhá na banánu.  

  Pokud CT hrají mid hodně agresivně, dá se hodit smoke na top mid. Tenhle konkrétní má výhodu v tom, že se dá rozbít granátem k boileru, nebo na long tak, že rozbije pouze jednu stranu. Zároveň to může být varianta pro eco/force buy.  
###### Mid lurk smoke  { .grenade-h }
  `jumpthrow`  
  `setpos -935.582703 584.386047 -20.946472;setang -13.133948 -1.318796 0.000000`  

  ![](images/inferno/t/top_mid_smoke.avif){ .glightbox }

#### Second mid

  První hráč na second midu by měl hodit molotov do appů. Dá se to sice držet z mostu, ale to je pozice, která je daleko od všeho, takže je lepší to prostě zapálit.  
###### Apps molotov  { .grenade-h }

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

###### Quad molotov  { .grenade-h }
  `running throw`  
  `setpos 1207.989258 217.128540 180.761261;setang -2.926031 59.061108 0.000000`  

  ![](images/inferno/t/apps/quad_molotov.avif){ .glightbox data-gallery="t_apps_boiler }

###### Short flash  { .grenade-h }
  `left click throw`  
  `setpos 1240.660889 223.595245 226.313324;setang 18.127991 69.866325 0.000000`  

  ![](images/inferno/t/apps/short_flash.avif){ .glightbox data-gallery="t_apps_boiler }  

  Z appů byste neměli jít na site jako první. Váš hlavní úkol by měl být vypálit pit a flashnout site, následně se ale spíš snažíte o případný refrag a zkontrolování beden na situ.  

###### Pit molotov  { .grenade-h }
  `crouch throw`  
  `setpos 1567.772705 -377.959229 252.000000;setang -5.478065 23.604736 0.000000`  

  ![](images/inferno/t/apps/pit_molotov.avif){ .glightbox data-gallery="t_apps_exec" }

###### Site flash  { .grenade-h }
  `crouch throw`  
  `setpos 1567.772705 -377.959229 252.000000;setang -26.311995 -28.051134 0.000000`  

  ![](images/inferno/t/apps/site_flash.avif){ .glightbox data-gallery="t_apps_exec" }

  Když se zaseknete v appech a potřebujete vyjít site, dá se hodit lurk smoke, který vám umožní izolovat úhly z pitu a balkónu a zároveň můžete vyskočit na zábradlí a kouknut do situ, nebo na short. Ze zadní poloviny situ je vidět jenom hlava, takže když přijde na lámání chleba, tak můžete zkusit překvapit.  

###### Apps lurk smoke  { .grenade-h }
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

###### Long smoke  { .grenade-h }
  `left click throw`  
  `setpos 848.960510 308.665283 106.963165;setang -37.905621 42.835117 0.000000`  

  ![](images/inferno/t/top_mid/long_smoke.avif){ .glightbox }

  Quad se dá velice snadno vypálit jak z midu, tak z boileru a protože na shortu se nedá za nic schovat, tak i "špatné" flashe, co dopadnou ke stěně za boiler, vytlačí CT do pasivnějších pozic.  

###### Quad molotov  { .grenade-h }
  `running jumpthrow`  
  `setpos 1103.470337 447.031250 119.670898;setang -21.801952 59.467880 0.000000`  

  ![](images/inferno/t/top_mid/quad_molotov.avif){ .glightbox }

###### Short flash  { .grenade-h }
  Není potřeba aby byl nějak přesný, cokoliv co padá ke stěně za boiler je ok
  `left click throw`  
  `setpos 1075.9464111328125 587.9678955078125 121.976715; setang -18.1501 -35.59192`  

  ![](images/inferno/t/top_mid/short_flash.avif){ .glightbox }

### A

  Ačko se dobývá primárně přes short. Na site se musí projít přes tvz. "zónou smrti".

  ![](images/inferno/t/a/kill_zone.avif){ .glightbox }

  CT můžou držet tolik různých poziček, že to prostě musíte poslat a doufat, že vás případně někdo tradne. Proto, dokud jsou všichni CT naživu, nemá smysl chodit přes long. Hlavní je dobýt site. Retake na Infernu není jednoduchý, takže trade na shortu, nebo jenom zabrání pozičky na Ačku/v pitu udělá mnohem víc, než lurk kill z longu.  
  Dvě nejdůležitější věci jsou moto smoke a molotov do pitu.  

###### Moto smoke  { .grenade-h }
  `left click throw`  
  `setpos 1010.614929 447.183289 112.232086;setang -37.993710 12.974021 0.000000`  

  ![](images/inferno/t/a/moto_smoke.avif){ .glightbox }

###### Pit molotov  { .grenade-h }
  Ne vždycky dohoří až úplně do rohu, ale CT tam chytá flashe, takže to nijak extra nevadí, důležitější je aby se tam CT nemohlo schovávat. Některé profesionální teamy, z toho důvodu, hází podobný molotov i z appů.  
  `running throw`
  `setpos 1322.031860 230.793213 149.390625;setang -11.703787 -24.469584 0.000000`

  ![](images/inferno/t/a/pit_molotov.avif){ .glightbox }

  Další možná utilita je:  

###### Balcony molotov  { .grenade-h }
  `jumpthrow`  
  `setpos 1201.219727 587.968750 130.511703;setang -1.759999 -45.391571 0.000000`  

  ![](images/inferno/t/a/balcony_molotov.avif){ .glightbox }

###### Site flash  { .grenade-h }
  `left click throw`  
  `setpos 1322.069946 250.357101 144.046875;setang -15.114158 -29.917601 0.000000`  

  ![](images/inferno/t/a/site_flash.avif){ .glightbox }

  Pokud ale už padl nějaký open frag/trade, situace se zásadně mění. CT už nejsou schopní efektivně pokrýt long a A site zároveň. Ve čtyřech na tp musí hrát pouze jednoho na B, ve třech už prostě musí něco pustit.  
  Z toho důvodu umí být dost nepříjemný smoke mezi arch a knihovnu. Hrozba je, že projdeme na CT spawn, hráč co drží long je tedy v situaci, kdy potřebuje držet CT spawn, ale zároveň tím izoluje hráče na A, tudíž umí být velice efektivní fake hodit tenhle smoke a instantně walkovat na short.

  ![](images/inferno/t/a/3v3.avif){ .glightbox }

###### Long lurk smoke  { .grenade-h }
  `jumpthrow`
  `setpos 1512.968750 909.958252 160.309341;setang -26.509966 165.786270 0.000000`

  ![](images/inferno/t/a/3v3_smoke.avif){ .glightbox }

### B

  Execute na B hodně záleží na infu z banánu. Čím méně granátů CT mají, tím méně toho můžou udělat proti rozhození Bčka. Zároveň, protože "základní granáty" může hodit jeden hráč z relativně bezpečné pozice, tak umí být relative efektivní B fake. Inferno má dost pomalé rotace, takže CT jsou často nuceni rotovat brzo a tudíž Tčka můžou čekat na top midu a čekat na rotaci, když jeden rozhodí Bčko z banánu.

###### CT smoke  { .grenade-h }
  Padá na boost, takže se dá bezpečně vyskočit na jedničku, což je dobrý off-angle na trojku a celkově dobrá pozice na trade  
  `middle click W jumpthrow`  
  `setpos 369.515747 1664.031250 146.453186;setang -13.662132 64.257309 0.000000`  

  ![](images/inferno/t/b/ct_smoke.avif){ .glightbox data-gallery="b_default_util" }
      
###### Coffin smoke  { .grenade-h }
  `running jumpthrow`  
  `setpos 369.513367 1664.031250 146.453186;setang -1.518130 85.267334 0.000000` 

  ![](images/inferno/t/b/coffin_smoke.avif){ .glightbox data-gallery="b_default_util" }
      
###### God flash  { .grenade-h }
  Flashuje CT, coffiny a prakticky celý site. Ideální první flash  

  `left click throw`  
  `setpos 369.491302 1664.062744 146.453186;setang -30.139896 77.633858 0.000000`  

  ![](images/inferno/t/b/god_flash.avif){ .glightbox data-gallery="b_default_util" }
      
###### Entry flash  { .grenade-h }
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

###### Smoke a molotov na coffiny  { .grenade-h }
  `left click throw`  
  `setpos 430.304230 1773.862915 240.000000;setang -18.457699 90.286758 0.000000`  

  ![](images/inferno/t/b/coffin_smoke_deep.avif){ .glightbox data-gallery="halfwall_b_util" }

  `jumpthrow`  
  `setpos 430.304230 1773.862915 240.000000;setang 8.162273 86.414711 0.000000`  

  ![](images/inferno/t/b/coffin_molotov.avif){ .glightbox data-gallery="halfwall_b_util" }

###### Flash za fontánu  { .grenade-h }
  Bouchá za fontánou, takže musí být člověk až v poolu, aby ho to flashlo. Být na jedničce je furt ok  
  `left click throw`  
  `setpos 430.304230 1773.862915 240.000000;setang -15.267741 96.116951 0.000000`  

  ![](images/inferno/t/b/fountain_flash.avif){ .glightbox data-gallery="halfwall_b_util" }

  Až na kostel se to dá hodit i od dřeva, ale je to o trochu horší pozička. Varianta pro to, když vám příliš vadí Tčko vyhozené na zídce.

###### CT smoke (alt)  { .grenade-h }

  `left click throw`  
  `setpos 120.585464 1593.889404 119.996689;setang -33.153034 59.036907 0.000000`  

  ![](images/inferno/t/b/ct_smoke_alt.avif){ .glightbox data-gallery="b_default_alternative" }

###### God flash (alt)  { .grenade-h }

  `jumpthrow`  
  `setpos 120.585464 1593.889404 119.996689;setang -1.429045 63.656868 0.000000`  

  ![](images/inferno/t/b/god_flash_alt.avif){ .glightbox data-gallery="b_default_alternative" }

###### Entry flash  (alt)  { .grenade-h }

  `w jumpthrow`  
  `setpos 120.585464 1593.889404 119.996689;setang 2.068954 49.444851 0.000000`  

  ![](images/inferno/t/b/entry_flash_alt.avif){ .glightbox data-gallery="b_default_alternative" }
  
## CT

### Default
  Celý setup se točí okolo banánu. Vždycky je potřeba mít kontrolu na jedné straně mapy. Buďto na banánu, nebo na top midu. Když jsou Tčka na banánu, tak CT chtějí držet top mid, případně appy, když CT kontrolují banán, tak chtějí CT na Ačku hrát passivně ze situ a na info.

### A
  Hlavní problém top midu je v tom, že se prostě nemáte kam schovat. Pokud si Tčka smoknou jednu stranu, flashnout druhou a vyběhnou to ve čtyřech, tak tam prostě nemáte jak přežít. Proto se top mid drží v případě, že víte, že máte alespoň 2 Tčka na banánu, anebo musíte být připraveni při první známce odporu utíkat do situ, kde máte mnohem silnejší pozičky.  
  Pokud začínáte 3 na A, dá se překvapit nějakou agresí například na second mid, ale pointa je získat jeden kill a zase ztáhnout zpátky na top mid/site. Second mid má příliš mnoho poziček, které musíte zkontrolovat a nejsou tam žádné dobré pozice na to, abyste to dlouhodobě drželi, takže pushovat z Ačka prakticky nemá smysl, pokud jsi nejste stoprocentně jistí, že jsou všichni na banánu.

#### Site crossfires
  Prakticky každý crossfire na Ačku se bude točit okolo téhle zóny:

  ![](images/inferno/t/a/kill_zone.avif){ .glightbox }

  Tčka mají hromadu poziček, které musí zkontrolovat a vždycky jim hrozí rotace z longu.  
  
##### Balcony + Site
  Jeden z nejnepříjemnějších setupů na Ačku. Oba hráči drží úhel, kde Tčko už chce kontrolovat druhou stranu a zároveň oba můžou vyběhnout na kontakt druhého.

  ![](images/inferno/ct/a/balcony_site.avif){ .glightbox data-gallery="balcony_site" }

  Hráč na balkóně drží cross do situ.

  ![](images/inferno/ct/a/balcony_site_balcony.avif){ .glightbox data-gallery="balcony_site" }

  Hráč na situ drží balkón.

  ![](images/inferno/ct/a/balcony_site_site.avif){ .glightbox data-gallery="balcony_site" }

##### Truck + Site
  Trochu agresivnější setup, který ale má výhodu v tom, že ignoruje většinu flashů, co můžou Tčka házet.

  ![](images/inferno/ct/a/truck_site.avif){ .glightbox data-gallery="truck_site" }

  Hráč na trucku hraje primárně na info. Snaží se maximálně urvat toho prvního na shortu a zalézt. Následně čeká na flash od hráče ze situ.

  ![](images/inferno/ct/a/truck_site_truck.avif){ .glightbox data-gallery="truck_site" }

  Hráč na situ drží balkón a při kontaktu na shortu hází flash.

  ![](images/inferno/ct/a/truck_site_site.avif){ .glightbox data-gallery="truck_site" }

###### Short flash (Truck + Site)  { .grenade-h }
  `crouch middle click throw`  
  `setpos 1819.059814 693.965271 155.971542;setang -25.444054 -76.882675 0.000000`  

  ![](images/inferno/ct/a/truck_site_flash.avif){ .glightbox data-gallery="truck_site" }

##### Pit + Site
  Asi nejčastější setup, co je vidět na premiéře, ale většinou hraný příliš agresivně.

  ![](images/inferno/ct/a/pit_site.avif){ .glightbox data-gallery="pit_site" }

  Hráč v pitu primárně drží cross na site. Je potřeba mít smoke, protože je pravděpodobné, že se vás Tčka pokusí vypálit. Důležité je nehrát z pitu moc agresivně, protože dokud jste na živu, tak je pro Tčka extrémně nepříjemné se pokoušet plantovat. A i když plantnou v situ, tak mají mnohem náročnější post plant.

  ![](images/inferno/ct/a/pit_site_pit.avif){ .glightbox data-gallery="pit_site" }

  Hráč na situ drží balkón.

  ![](images/inferno/ct/a/balcony_site_site.avif){ .glightbox data-gallery="pit_site" }

### B

  Béčko je site, který je extrémně závislý na granátech. Při každém nákupu by oba hráči měli mít granát, flash, smoke a molotov a to i když to znamená hrát s vrtačkou.  
  Banán se bez granátů nedá ani dobýt, ani retakenout, takže bez nich člověk musí sedět na situ a modlit se, aby Tčka nerozhodili execute.  
  V ideálním případě CTčka vyčistí banán a následně jeden zůstane jumpspotovat u auta a druhý zrotuje na Ačko.  

##### Boj o banán

  Asi nejčastější strategie hodit utilitu na zastavení případného rushe a následně smoknout spodek banánu a vyčistit ho.  

###### 1. spawn
  Prací prvního hráče je zastavit rush. Proto hází granát:  
  `running middle click throw`  
  `setpos 835.542786 2328.455322 151.443680;setang -18.304049 -127.144279 0.000000`  

  ![](images/inferno/ct/b/banana_nade.avif){ .glightbox data-gallery="ct_b_1st_util" }

  Hlaví pointou je zpomalit první hráče, co vybíhají na banán, aby nemohli proběhnout následující molotov:  
  `running throw`  
  `setpos 778.080017 2121.853516 150.000061;setang 4.752096 -160.013458 0.000000`  

  ![](images/inferno/ct/b/top_banana_molo.avif){ .glightbox data-gallery="ct_b_1st_util" }

  Poté jde za sandbag a cca 2 vteřiny hraje anti-flash.  
  
  Pokud Tčka chtějí proběhnout, tak swingne. Tčka si musí smoknout molotov, takže budou vybíhat ze smoku, a druhý hráč bude házet flash.  
  
  Když Tčka nejdou banán, tak si hází flash:  (Tehnle by měl být až po flashi od druhého hráče)
  `middle click throw`  
  `setpos 748.064026 1880.062134 152.703125;setang -51.171814 177.568573 0.000000`  

  ![](images/inferno/ct/b/banana_flash_sandbag.avif){ .glightbox }

  Následně dropne smoke směrem k situ (tohle je docela důležité, protože jde první na banán. Zároveň nechce aby Tčka dostali smoke na execute, pokud ho zabijí, a zároveň po případném tradu druhý hráč ten smoke potřebuje) a swingne banán. V tu chvíli by už měl být smoke na spodku banánu a molotov za dřevem, takže si hlavně kontroluje levou stranu a případně ty, co vybíhají z molotovu. Zároveň je lepší běžet po pravé straně, je to lepší úhel na čistění té levé a méně to blokuje výhled druhého hráče.  

###### 2. spawn
  Druhý hráč ze začátku nehází žádné granáty. Jeho prací je hrát z rohu a dělat support prvnímu hráči. Čeká na info a pokud Tčka běží banán, hází granáty atd., tak hází granát:  
  `left click throw`  
  `setpos 756.475464 2263.134277 150.000214;setang -9.306039 -121.470245 0.000000`  

  ![](images/inferno/ct/b/banana_nade_anti-rush.avif){ .glightbox data-gallery="ct_b_banana_anti-rush" }

  Následně hází flash:  (Není to žádný popflash, pointa je spíš dostat Tčka do pozic, kde spíš chytnout molotov/granát a připravit lepší podmínky pro flash prvního hráče)
  `middle click throw`  
  `setpos 700.347351 2269.538086 150.000214;setang -70.884140 -41.544209 0.000000`  

  ![](images/inferno/ct/b/banana_flash_anti-rush.avif){ .glightbox data-gallery="ct_b_banana_anti-rush" }

  A swinge s prvním hráčem.  

  Pokud Tčka nerushují banán, tak smokne spodek banánu:  
  `running left click throw`  
  `setpos 758.618042 2254.303711 150.000214;setang -7.260059 -124.373154 0.000000`  

  ![](images/inferno/ct/b/deep_banana_smoke.avif){ .glightbox data-gallery="ct_b_banana_default_take" }

  Následně flashne za zíďku:  
  `left click throw`  
  `setpos 737.898376 2222.256592 150.000046;setang -9.570047 -122.019066 0.000000`  

  ![](images/inferno/ct/b/banana_flash_deep.avif){ .glightbox data-gallery="ct_b_banana_default_take" }

  Zapálí dřeva: (pozor na overpeek, Tčko může stát před dřevem)  
  `running left click throw`  
  `setpos 776.741333 2261.974609 150.000214;setang -3.036067 -128.310699 0.000000`  

  ![](images/inferno/ct/b/wood_molo.avif){ .glightbox data-gallery="ct_b_banana_default_take" }

  Hodí granát na "brooms":  
  `running left click throw`  
  `setpos 783.475220 2176.897949 150.000046;setang -11.968094 -139.113510 0.000000`  

  ![](images/inferno/ct/b/brooms_nade.avif){ .glightbox data-gallery="ct_b_banana_default_take" }

  A taky vyběhne banán.

##### Boj o banán ve třech
  Ve třech se dá banán vzít ještě o něco více agresivně a s méně granáty. Nevýhodou je, že je k tomu potřeba smoke ze spawnu (jinak tam není dost brzy), takže je potřeba koordinace čtyř hráčů.

###### Smoke na spodní banán  { .grenade-h }
  `jumpthrow`  
  `setpos 2035.968750 1914.937744 151.570160;setang -38.565929 -158.704102 0.000000`  

  ![](images/inferno/ct/b/deep_banana_smoke_instant.avif){ .glightbox }

###### 1. spawn
  První hráč hází molotov: (Pokud má dobrý spawn, Tčka se nemůžou dostat za dřeva bez toho, aby je viděl)  
  `running throw`  
  `setpos 788.885742 2222.596436 150.000031;setang -11.615915 -137.093109 0.000000`  

  ![](images/inferno/ct/b/brooms_molotov.avif){ .glightbox }
  
  A následně vyběhne od zíďky.  
  
###### 2. spawn
  Druhý hráč hází granát:  
  `running middle click throw`  
  `setpos 835.542786 2328.455322 151.443680;setang -16.786034 -127.254295 0.000000`  

  ![](images/inferno/ct/b/banana_nade.avif){ .glightbox data-gallery="ct_b_fast_util" }
  
  "FURIA" smoke: (Blokuje molotovy za auto. Zároveň když přijde na lámání chleba, tak se přes něj dá spíš utéct zpátky k situ)  
  `running throw`  
  `setpos 802.729797 2276.606445 150.000214;setang 14.124146 -111.772499 0.000000`  

  ![](images/inferno/ct/b/furia_smoke.avif){ .glightbox data-gallery="ct_b_fast_util" }
  
  A také vyběhne banán. Je lepší také vyběhnout k zíďce, ale dá se to vzít i od auta  
  
###### 3. spawn
  Třetí pouze hází flashe:  
  `w middle click jumpthrow`  
  `setpos 970.474548 2779.924561 146.137924;setang -4.223870 -130.934570 0.000000`  

  ![](images/inferno/ct/b/top_banana_flash.avif){ .glightbox }

  Následně může nechat smoke a molotov na CT a rotovat na Ačko.

##### Pasivní setup
  Občas Tčka na začátku kola hází na banán hodně granátů, takže nemusí být extra příjemné být na sandbagu.  

###### Top banana smoke  { .grenade-h }
  `jumpthrow`  
  `setpos 2537.728027 2468.338135 138.161682;setang -24.749971 -165.295654 0.000000`  

  ![](images/inferno/ct/b/top_banana_smoke.avif){ .glightbox }

  Cíl je nejdříve pasivně držet smoke, nechat Tčka ať se vyhází a dobýt banán o chvíli později. Smoke u zídky blokuje výhled od dřeva (pokud se Tčka nevyboostí) a umožní bezpečněji hrát před sandbagem, kde je mnohem menší šance, že chytnete granát.  
  Jakmile smoke skončí, je dobré ihned hodit molotov za zídku (hráč u sandbagu), aby nemohl být nikdo na blízko a když neslyšíte nikoho hořet, tak rozhodit stejný setup jako u defaultu. To znamená že hráč od rohu hodí:  

###### Bottom banana smoke  { .grenade-h }
  `running left click throw`  
  `setpos 758.618042 2254.303711 150.000214;setang -7.260059 -124.373154 0.000000`  

  ![](images/inferno/ct/b/deep_banana_smoke.avif){ .glightbox data-gallery="ct_b_banana_default_take2" }

###### Halfwall flash  { .grenade-h }  
  `left click throw`  
  `setpos 737.898376 2222.256592 150.000046;setang -9.570047 -122.019066 0.000000`  

  ![](images/inferno/ct/b/banana_flash_deep.avif){ .glightbox data-gallery="ct_b_banana_default_take2" }

###### Wood molotov  { .grenade-h }
  `running left click throw`  
  `setpos 776.741333 2261.974609 150.000214;setang -3.036067 -128.310699 0.000000`  

  ![](images/inferno/ct/b/wood_molo.avif){ .glightbox data-gallery="ct_b_banana_default_take2" }

###### Brooms grenade  { .grenade-h }
  `running left click throw`  
  `setpos 783.475220 2176.897949 150.000046;setang -11.968094 -139.113510 0.000000`  

  ![](images/inferno/ct/b/brooms_nade.avif){ .glightbox data-gallery="ct_b_banana_default_take2" }

  Nevýhodou tohohle setupu je, že jsou potřeba dva smoky místo jednoho, takže po zabrání banánu nezbývá smoke pro hráče, co zůstává na Béčku; to se ale dá vyřešit tím, že se hodí top banana smoke rovnou ze spawnu, aby měli Béčkaři tři smoky místo dvou.

###### Bottom banana smoke (instant)  { .grenade-h }
  `jumpthrow`  
  `setpos 2397.000000 2079.000000 146.611298;setang -42.283947 -178.205856 0.000000`  

  ![](images/inferno/ct/b/top_banana_smoke_instant.avif){ .glightbox }

##### Retake banánu
  Další variantou je nechat si Tčka myslet, že můžou získat auto a chytit je, když se snaží zabrat pozičky.  Na začátek je potřeba hodit granát a molotov jako u defaultu. Jednak aby Tčka nemohli rushnout banán a jednak aby nevěděli, co se na ně chystá.  

###### Default banana nade  { .grenade-h }
  `running middle click throw`  
  `setpos 835.542786 2328.455322 151.443680;setang -18.304049 -127.144279 0.000000`  

  ![](images/inferno/ct/b/banana_nade.avif){ .glightbox data-gallery="ct_b_1st_util2" }

###### Default banana molotov  { .grenade-h }
  `running throw`  
  `setpos 778.080017 2121.853516 150.000061;setang 4.752096 -160.013458 0.000000`  

  ![](images/inferno/ct/b/top_banana_molo.avif){ .glightbox data-gallery="ct_b_1st_util2" }

  Poté můžou banán úplně pustit s tím, že auto zaberou zpátky s granáty. Je dobré je začít házet okolo 1:40. To končí molotovy za zídkou a na autě, takže je největší pravděpodobnost, že Tčka budou zabírat vršek banánu.

###### Half-wall smoke  { .grenade-h }
  `w jumpthrow`  
  `setpos 436.043854 2656.968750 176.734375;setang -7.457872 -120.682175 0.000000`  

  ![](images/inferno/ct/b/half_wall_smoke.avif){ .glightbox data-gallery="banana_retake" }

  Smoke dopadne na zídku, takže Tčka nevidí ze dřeva, ani když se vyboostí na zídku.
  
###### Car molotov  { .grenade-h }
  `walking throw`  
  `setpos 436.064911 2656.960449 176.734375;setang 2.090124 -36.070107 0.000000`  

  ![](images/inferno/ct/b/car_molotov.avif){ .glightbox data-gallery="banana_retake" }

  Je lepší molotov hodit spíš dříve než později, pak zaručeně hoří i za autem.

###### Banana retake flash  { .grenade-h }
  `middle click jumpthrow`  
  `setpos 436.031250 2656.947266 176.734375;setang -1.539874 -45.046021 0.000000`  

  ![](images/inferno/ct/b/banana_retake_flash.avif){ .glightbox data-gallery="banana_retake" }

  Při správném načasování budou Tčka vybíhat ze smoku, do molotovu a do flashe. Jediné na co je potřeba si dát pozor jsou tyhle dvě pozičky, kde Tčka nebudou hořet.  

  ![](images/inferno/ct/b/banana_retake.avif){ .glightbox }

  V praxi by to mělo vypadat takhle:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/0_aik2gPOgs"
    title="B Execute"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;">
  </iframe>
</div>

  Případně se dá přidat granát na zídku. (Pro lineup se zarovnává okno a roh)

###### Half-wall nade  { .grenade-h }
  `running jumpthrow`  
  `setpos 964.177856 2779.937500 146.371872;setang 4.751979 -118.618607 0.000000`  

  ![](images/inferno/ct/b/half_wall_nade.avif){ .glightbox data-gallery="banana_retake" }
  
##### Hra ze situ
