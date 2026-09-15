const SUPABASE_URL='https://tmvhivwuewdoyiwgoznt.supabase.co';
const SUPABASE_KEY='sb_publishable_sVD261fc2j0l9PGHRoil7w_jNjbx12q';
const els=id=>document.getElementById(id);
const normalize=value=>(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es-ES').trim();
const unique=values=>[...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b,'es'));
const money=value=>Number(value||0).toLocaleString('es-ES',{style:'currency',currency:'EUR'});
const storageUrl=path=>path?`${SUPABASE_URL}/storage/v1/object/public/product-images/${path}`:'assets/goltra-framed.png';
const request=async(path,{method='GET',body,token,headers={}}={})=>{
 const response=await fetch(`${SUPABASE_URL}${path}`,{method,headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${token||SUPABASE_KEY}`,...(body instanceof Blob?{}:{'Content-Type':'application/json'}),...headers},body:body instanceof Blob?body:body?JSON.stringify(body):undefined});
 if(!response.ok){const error=await response.json().catch(()=>({message:'No se pudo completar la operación'}));throw new Error(error.message||error.error_description||`Error ${response.status}`)}
 if(response.status===204)return null;const text=await response.text();return text?JSON.parse(text):null;
};
const VERSIONS=['Fan','Player','Retro','Manga larga','Infantil'],SIZES=['S','M','L','XL','2XL','3XL','4XL','3-4','5-6','7-8','9-10','11-12','12-14'];
let products=[],favorites=new Set(JSON.parse(localStorage.getItem('goltra-favorites')||'[]')),category='all',currentId=null,session=JSON.parse(localStorage.getItem('goltra-admin-session')||'null'),adminFilter='all';
const buttons=[...document.querySelectorAll('[data-filter]')],league=els('league'),team=els('team'),season=els('season'),search=els('search');
const mapProduct=p=>({...p,id:String(p.id),name:p.nombre,team:p.equipo||'Sin equipo',season:p.temporada||'Sin temporada',league:p.liga||'Sin clasificar',category:p.categoria||'clubs',description:p.descripcion||`${p.nombre}. Camiseta disponible en GOLTRA.`,image:p.imagen_path,images:[...(p.catalogo_producto_imagenes||[])].sort((a,b)=>a.orden-b.orden),estado_web:p.estado_web||'borrador',versiones_disponibles:p.versiones_disponibles||VERSIONS,tallas_disponibles:p.tallas_disponibles||SIZES.slice(0,7)});
async function loadCatalog(admin=false){
 try{
  const select='*,catalogo_producto_imagenes(*)';
  const rows=await request(`/rest/v1/catalogo_productos?select=${encodeURIComponent(select)}&order=orden.asc,nombre.asc`,{token:admin?session?.access_token:null});
  products=(rows||[]).map(mapProduct);refresh();
  if(admin)renderAdmin();
 }catch(error){els('empty-results').hidden=false;els('empty-results').textContent='No hemos podido cargar el catálogo. Inténtalo de nuevo en unos segundos.';toast(error.message)}
}
function saveFavorites(){localStorage.setItem('goltra-favorites',JSON.stringify([...favorites]));els('fav-count').textContent=favorites.size}
function categoryMatch(p){return category==='all'||category==='favorites'&&favorites.has(p.id)||category==='clubs'&&p.league!=='Selecciones'||category==='national'&&p.league==='Selecciones'||category==='retro'&&p.category==='retro'}
function setOptions(el,values,placeholder){const previous=el.value;el.replaceChildren(new Option(placeholder,''));unique(values).forEach(v=>el.add(new Option(v,v)));el.value=values.includes(previous)?previous:''}
function imageFor(p){return storageUrl(p.image||p.images.find(i=>i.es_principal)?.imagen_path||p.images[0]?.imagen_path)}
function startingPrice(p){const keys={Fan:'precio_fan',Player:'precio_player',Retro:'precio_retro','Manga larga':'precio_manga_larga',Infantil:'precio_infantil'};const prices=(p.versiones_disponibles||[]).map(v=>Number(p[keys[v]])).filter(v=>Number.isFinite(v)&&v>0);return prices.length?Math.min(...prices):Number(p.precio_fan||15.99)}
function card(p,index){return `<article class="product-card ${p.estado_web==='agotado'?'is-sold-out':''}" data-id="${p.id}"><div class="product-image-wrap"><button class="product-image" data-open="${p.id}" aria-label="Ver ${p.name}"><span class="tag">${p.estado_web==='agotado'?'AGOTADA':p.category==='retro'?'RETRO CLUB':p.league==='Selecciones'?'SELECCIÓN':'CLUB'}</span><img src="${imageFor(p)}" alt="Camiseta ${p.name}" loading="lazy"><span class="product-arrow">↗</span></button><button class="card-heart ${favorites.has(p.id)?'saved':''}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?'Quitar de':'Añadir a'} favoritos">${favorites.has(p.id)?'♥':'♡'}</button></div><button class="product-info" data-open="${p.id}"><div><h3>${p.name}</h3><p>${p.team} · ${p.season}</p><strong class="card-price">Desde ${money(startingPrice(p))}</strong></div><span>${String(index+1).padStart(2,'0')}</span></button></article>`}
function refresh(reset=false){
 const base=products.filter(categoryMatch);if(reset){league.value='';team.value='';season.value=''}
 setOptions(league,base.map(p=>p.league),'Todas las ligas');const byLeague=base.filter(p=>!league.value||p.league===league.value);
 setOptions(team,byLeague.map(p=>p.team),league.value==='Selecciones'?'Todos los países':'Todos los equipos');els('team-label').childNodes[0].textContent=league.value==='Selecciones'?'País':'Equipo';
 const byTeam=byLeague.filter(p=>!team.value||p.team===team.value);setOptions(season,byTeam.map(p=>p.season),'Todas las temporadas');
 const query=normalize(search.value);const shown=byTeam.filter(p=>(!season.value||p.season===season.value)&&(!query||normalize([p.name,p.team,p.league,p.season,p.modelo,p.category].join(' ')).includes(query)));
 els('products').innerHTML=shown.map(card).join('');els('result-count').textContent=`${shown.length} ${shown.length===1?'camiseta':'camisetas'}${query?` para “${search.value.trim()}”`:''}`;els('empty-results').hidden=shown.length>0;
 buttons.forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});els('clear-filters').disabled=category==='all'&&!league.value&&!team.value&&!season.value&&!query;bindCards();
}
function bindCards(){document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openProduct(b.dataset.open));document.querySelectorAll('[data-favorite]').forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFavorite(b.dataset.favorite)})}
function setCategory(value){category=value;refresh(true);els('coleccion').scrollIntoView({behavior:'smooth'})}
buttons.forEach(b=>b.onclick=()=>setCategory(b.dataset.filter));league.onchange=()=>{team.value='';season.value='';refresh()};team.onchange=()=>{season.value='';refresh()};season.onchange=refresh;search.oninput=refresh;
els('clear-filters').onclick=()=>{search.value='';setCategory('all')};els('retro-link').onclick=()=>setCategory('retro');els('search-trigger').onclick=()=>{els('coleccion').scrollIntoView({behavior:'smooth'});setTimeout(()=>search.focus(),450)};els('favorites-trigger').onclick=()=>setCategory('favorites');
document.querySelectorAll('[data-quick-league]').forEach(b=>b.onclick=()=>{category='all';refresh(true);league.value=b.dataset.quickLeague;refresh();els('coleccion').scrollIntoView({behavior:'smooth'})});
function toggleFavorite(id){favorites.has(id)?favorites.delete(id):favorites.add(id);saveFavorites();refresh();if(currentId===id)updateDialogFavorite();toast(favorites.has(id)?'Guardada en favoritos':'Eliminada de favoritos')}
function updateDialogFavorite(){const saved=favorites.has(currentId);els('detail-favorite').textContent=saved?'♥':'♡';els('detail-favorite').classList.toggle('saved',saved)}
function productImages(p){const list=p.images.map(i=>i.imagen_path);if(p.image&&!list.includes(p.image))list.unshift(p.image);return list.length?list:[null]}
function selectDetailImage(path,p){els('detail-image').src=storageUrl(path);els('detail-image').alt=`Camiseta ${p.name}`;document.querySelectorAll('[data-detail-image]').forEach(b=>b.classList.toggle('active',b.dataset.detailImage===(path||'')))}
function openProduct(id){
 const p=products.find(x=>x.id===id);if(!p)return;currentId=id;els('detail-title').textContent=p.name;els('detail-meta').textContent=`${p.league} · ${p.team} · ${p.season}`;els('detail-description').textContent=p.description;
 const images=productImages(p);els('detail-thumbs').innerHTML=images.length>1?images.map((path,i)=>`<button data-detail-image="${path||''}" class="${i===0?'active':''}"><img src="${storageUrl(path)}" alt="Vista ${i+1} de ${p.name}"></button>`).join(''):'';document.querySelectorAll('[data-detail-image]').forEach(b=>b.onclick=()=>selectDetailImage(b.dataset.detailImage||null,p));selectDetailImage(images[0],p);
 els('detail-version').replaceChildren(...p.versiones_disponibles.map(v=>new Option(v,v)));els('detail-size').replaceChildren(...p.tallas_disponibles.map(v=>new Option(v,v)));els('detail-version').value=p.category==='retro'&&p.versiones_disponibles.includes('Retro')?'Retro':p.versiones_disponibles[0]||'';els('detail-size').value=p.tallas_disponibles.includes('M')?'M':p.tallas_disponibles[0]||'';els('detail-custom').checked=false;els('detail-patches').checked=false;els('custom-option').hidden=!p.permite_personalizacion;els('patch-option').hidden=!p.permite_parches;els('personal-fields').hidden=true;els('custom-name').value='';els('custom-number').value='';els('detail-size-guide').textContent=p.guia_tallas||'Las medidas de esta camiseta están pendientes. Escríbenos y te ayudamos a elegir talla.';const sold=p.estado_web==='agotado';els('sold-out-message').hidden=!sold;els('interest-button').disabled=sold;els('interest-button').innerHTML=sold?'Camiseta agotada':'Quiero esta camiseta <span>↗</span>';updatePrice();updateDialogFavorite();els('product-dialog').showModal();
}
function updatePrice(){const p=products.find(x=>x.id===currentId);if(!p)return;const key={Fan:'precio_fan',Player:'precio_player',Retro:'precio_retro','Manga larga':'precio_manga_larga',Infantil:'precio_infantil'}[els('detail-version').value];const total=Number(p[key]||18.99)+(els('detail-custom').checked?Number(p.suplemento_personalizacion||2):0)+(els('detail-patches').checked?Number(p.suplemento_parches||2):0);els('detail-price').textContent=money(total);els('personal-fields').hidden=!els('detail-custom').checked}
['detail-version','detail-custom','detail-patches'].forEach(id=>els(id).onchange=updatePrice);els('detail-favorite').onclick=()=>toggleFavorite(currentId);els('zoom-trigger').onclick=()=>{els('zoom-image').src=els('detail-image').src;els('zoom-image').alt=els('detail-image').alt;els('image-dialog').showModal()};
els('interest-button').onclick=()=>{const p=products.find(x=>x.id===currentId);const text=[`Hola, me interesa la camiseta ${p.name} (${p.season})`,`Versión: ${els('detail-version').value}`,`Talla: ${els('detail-size').value}`,els('detail-custom').checked?`Personalización: ${els('custom-name').value||'por concretar'} ${els('custom-number').value||''}`:'Sin personalización',els('detail-patches').checked?'Con parches':'Sin parches',`Precio mostrado: ${els('detail-price').textContent}`].join('\n');navigator.clipboard?.writeText(text);window.open('https://www.instagram.com/goltra_shop/','_blank','noopener');toast('Selección copiada. Pégala en Instagram')};
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
function toast(message){const t=els('toast');t.textContent=message;t.classList.add('show');clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),2800)}

saveFavorites();loadCatalog();
