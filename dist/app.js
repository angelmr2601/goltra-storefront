const DEFAULT_PRODUCTS=[
 {id:'milan',name:'AC Milan',league:'Liga italiana',team:'AC Milan',season:'2006/2007',category:'retro',image:'milan.jpg',description:'El rojo y negro de siempre. Una camiseta ligada a una noche europea inolvidable.',active:true},
 {id:'arsenal',name:'Arsenal',league:'Liga inglesa',team:'Arsenal',season:'2003/2004',category:'retro',image:'arsenal.jpg',description:'Una historia en rojo y blanco. El recuerdo de una temporada invencible.',active:true},
 {id:'madrid',name:'Real Madrid',league:'Liga española',team:'Real Madrid',season:'2025/2026',category:'clubs',image:'madrid.jpg',description:'El blanco como identidad, en una versión limpia y contemporánea.',active:true},
 {id:'belgium',name:'Bélgica',league:'Selecciones',team:'Bélgica',season:'2026',category:'national',image:'belgium.jpg',description:'El carácter de los Red Devils en una equipación de nueva generación.',active:true},
 {id:'brazil',name:'Brasil retro',league:'Selecciones',team:'Brasil',season:'2002',category:'retro',image:'brazil.jpg',description:'El jogo bonito nunca pasa. Una de las camisetas más reconocibles del fútbol.',active:true},
 {id:'betis',name:'Real Betis',league:'Liga española',team:'Real Betis',season:'2025/2026',category:'clubs',image:'betis.jpg',description:'Verde, blanco y una forma de vivir el fútbol que se lleva dentro.',active:true},
 {id:'france',name:'Francia',league:'Selecciones',team:'Francia',season:'2024',category:'national',image:'france.jpg',description:'El azul de Les Bleus con una estética sobria y elegante.',active:true}
];
const PRICES={Fan:15.99,Player:18.99,Retro:18.99,'Manga larga':18.99,Infantil:18.99};
const els=id=>document.getElementById(id);
const load=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let products=load('goltra-demo-products',DEFAULT_PRODUCTS);
let favorites=new Set(load('goltra-favorites',[]));
let category='all',currentId=null;
const buttons=[...document.querySelectorAll('[data-filter]')];
const league=els('league'),team=els('team'),season=els('season'),search=els('search');
const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es-ES').trim();
const unique=values=>[...new Set(values)].sort((a,b)=>a.localeCompare(b,'es'));
const money=value=>value.toLocaleString('es-ES',{style:'currency',currency:'EUR'});
function save(){localStorage.setItem('goltra-demo-products',JSON.stringify(products))}
function saveFavorites(){localStorage.setItem('goltra-favorites',JSON.stringify([...favorites]));updateFavCount()}
function updateFavCount(){els('fav-count').textContent=favorites.size}
function categoryMatch(p){return category==='all'||category==='favorites'&&favorites.has(p.id)||category==='clubs'&&p.league!=='Selecciones'||category==='national'&&p.league==='Selecciones'||category==='retro'&&p.category==='retro'}
function setOptions(el,values,placeholder){const previous=el.value;el.replaceChildren(new Option(placeholder,''));unique(values).forEach(v=>el.add(new Option(v,v)));el.value=values.includes(previous)?previous:''}
function card(p,index){return `<article class="product-card" data-id="${p.id}"><div class="product-image-wrap"><button class="product-image" data-open="${p.id}" aria-label="Ver ${p.name}"><span class="tag">${p.category==='retro'?'RETRO CLUB':p.league==='Selecciones'?'SELECCIÓN':'CLUB'}</span><img src="assets/${p.image}" alt="Camiseta ${p.name} sobre maniquí" loading="lazy"><span class="product-arrow">↗</span></button><button class="card-heart ${favorites.has(p.id)?'saved':''}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?'Quitar de':'Añadir a'} favoritos">${favorites.has(p.id)?'♥':'♡'}</button></div><button class="product-info" data-open="${p.id}"><div><h3>${p.name}</h3><p>${p.team} · ${p.season}</p></div><span>${String(index+1).padStart(2,'0')}</span></button></article>`}
function refresh(resetDependent=false){
 const active=products.filter(p=>p.active&&categoryMatch(p));
 if(resetDependent){league.value='';team.value='';season.value=''}
 setOptions(league,active.map(p=>p.league),'Todas las ligas');
 const byLeague=active.filter(p=>!league.value||p.league===league.value);
 setOptions(team,byLeague.map(p=>p.team),league.value==='Selecciones'?'Todos los países':'Todos los equipos');
 els('team-label').childNodes[0].textContent=league.value==='Selecciones'?'País':'Equipo';
 const byTeam=byLeague.filter(p=>!team.value||p.team===team.value);
 setOptions(season,byTeam.map(p=>p.season),'Todas las temporadas');
 const query=normalize(search.value);
 const shown=byTeam.filter(p=>(!season.value||p.season===season.value)&&(!query||normalize([p.name,p.team,p.league,p.season,p.category].join(' ')).includes(query)));
 els('products').innerHTML=shown.map(card).join('');
 els('result-count').textContent=`${shown.length} ${shown.length===1?'camiseta':'camisetas'}${query?` para “${search.value.trim()}”`:''}`;
 els('empty-results').hidden=shown.length>0;
 buttons.forEach(b=>{const on=b.dataset.filter===category;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
 els('clear-filters').disabled=category==='all'&&!league.value&&!team.value&&!season.value&&!query;
 bindCards();
}
function bindCards(){
 document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openProduct(b.dataset.open));
 document.querySelectorAll('[data-favorite]').forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFavorite(b.dataset.favorite)});
}
function setCategory(value){category=value;refresh(true);els('coleccion').scrollIntoView({behavior:'smooth'})}
buttons.forEach(b=>b.onclick=()=>setCategory(b.dataset.filter));
league.onchange=()=>{team.value='';season.value='';refresh()};team.onchange=()=>{season.value='';refresh()};season.onchange=refresh;search.oninput=refresh;
els('clear-filters').onclick=()=>{search.value='';setCategory('all')};
els('retro-link').onclick=()=>setCategory('retro');
els('search-trigger').onclick=()=>{els('coleccion').scrollIntoView({behavior:'smooth'});setTimeout(()=>search.focus(),450)};
els('favorites-trigger').onclick=()=>setCategory('favorites');
document.querySelectorAll('[data-quick-league]').forEach(b=>b.onclick=()=>{category='all';refresh(true);league.value=b.dataset.quickLeague;refresh();els('coleccion').scrollIntoView({behavior:'smooth'})});
function toggleFavorite(id){
 favorites.has(id)?favorites.delete(id):favorites.add(id);saveFavorites();refresh();
 if(currentId===id)updateDialogFavorite();
 toast(favorites.has(id)?'Guardada en favoritos':'Eliminada de favoritos');
}
function updateDialogFavorite(){const saved=favorites.has(currentId);els('detail-favorite').textContent=saved?'♥':'♡';els('detail-favorite').classList.toggle('saved',saved)}
function openProduct(id){
 const p=products.find(x=>x.id===id);if(!p)return;currentId=id;
 els('detail-title').textContent=p.name;els('detail-meta').textContent=`${p.league} · ${p.team} · ${p.season}`;els('detail-description').textContent=p.description;
 els('detail-image').src=`assets/${p.image}`;els('detail-image').alt=`Camiseta ${p.name}`;els('detail-version').value=p.category==='retro'?'Retro':'Fan';
 els('detail-size').value='M';els('detail-custom').checked=false;els('detail-patches').checked=false;els('personal-fields').hidden=true;els('custom-name').value='';els('custom-number').value='';
 updatePrice();updateDialogFavorite();els('product-dialog').showModal();
}
function updatePrice(){const total=PRICES[els('detail-version').value]+(els('detail-custom').checked?2:0)+(els('detail-patches').checked?2:0);els('detail-price').textContent=money(total);els('personal-fields').hidden=!els('detail-custom').checked}
['detail-version','detail-custom','detail-patches'].forEach(id=>els(id).onchange=updatePrice);
els('detail-favorite').onclick=()=>toggleFavorite(currentId);
els('zoom-trigger').onclick=()=>{els('zoom-image').src=els('detail-image').src;els('zoom-image').alt=els('detail-image').alt;els('image-dialog').showModal()};
els('interest-button').onclick=()=>{const p=products.find(x=>x.id===currentId);const text=[`Hola, me interesa la camiseta ${p.name} (${p.season})`,`Versión: ${els('detail-version').value}`,`Talla: ${els('detail-size').value}`,els('detail-custom').checked?`Personalización: ${els('custom-name').value||'por concretar'} ${els('custom-number').value||''}`:'Sin personalización',els('detail-patches').checked?'Con parches':'Sin parches',`Precio mostrado: ${els('detail-price').textContent}`].join('\n');navigator.clipboard?.writeText(text);window.open('https://www.instagram.com/goltra_shop/','_blank','noopener');toast('Selección copiada. Pégala en el mensaje de Instagram')};
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
function toast(message){const t=els('toast');t.textContent=message;t.classList.add('show');clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),2600)}
// Catalog studio: intentionally local for this design demo.
const admin=els('admin-dialog'),form=els('product-form');
els('admin-trigger').onclick=()=>{renderAdmin();admin.showModal()};
function renderAdmin(){els('admin-list').innerHTML=products.map(p=>`<div class="admin-row"><img src="assets/${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.team} · ${p.season}</small></div><span class="visibility">${p.active?'Visible':'Oculta'}</span><button data-edit="${p.id}">Editar</button></div>`).join('');document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editProduct(b.dataset.edit))}
function editProduct(id){const p=products.find(x=>x.id===id);els('admin-id').value=p.id;els('admin-name').value=p.name;els('admin-league').value=p.league;els('admin-team').value=p.team;els('admin-season').value=p.season;els('admin-category').value=p.category;els('admin-description').value=p.description;els('admin-image').value=p.image;els('admin-active').checked=p.active;form.scrollIntoView({behavior:'smooth'})}
function resetForm(){form.reset();els('admin-id').value='';els('admin-active').checked=true}
els('cancel-edit').onclick=resetForm;
form.onsubmit=e=>{e.preventDefault();const id=els('admin-id').value||`custom-${Date.now()}`;const item={id,name:els('admin-name').value.trim(),league:els('admin-league').value,team:els('admin-team').value.trim(),season:els('admin-season').value.trim(),category:els('admin-category').value,image:els('admin-image').value,description:els('admin-description').value.trim()||'Una camiseta para llevar tu pasión.',active:els('admin-active').checked};const pos=products.findIndex(p=>p.id===id);pos>=0?products.splice(pos,1,item):products.unshift(item);save();resetForm();renderAdmin();refresh();toast('Catálogo de demo actualizado')};
els('reset-catalog').onclick=()=>{products=structuredClone(DEFAULT_PRODUCTS);save();resetForm();renderAdmin();refresh();toast('Catálogo restaurado')};
updateFavCount();refresh();
