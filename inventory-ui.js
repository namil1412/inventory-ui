const runeCatalog = {
  slashWave: { id:'slashWave', kind:'rune', socket:'attack', name:'검기', sigil:'V', rarity:'rare', rarityLabel:'희귀', category:'공격룬 · 근접 전용', mana:18, desc:'무기를 휘두른 방향으로 날카로운 검기를 발사합니다.', stats:[['피해 배율','145%'],['유효 거리','보통'],['마나 소모','18']], effect:'룬 배열의 공격 형태를 검기 발사로 변경합니다.' },
  spinSlash: { id:'spinSlash', kind:'rune', socket:'attack', name:'회전 베기', sigil:'O', rarity:'common', rarityLabel:'일반', category:'공격룬 · 근접 전용', mana:14, desc:'플레이어를 중심으로 넓은 범위를 한 번 베어냅니다.', stats:[['피해 배율','120%'],['공격 범위','넓음'],['마나 소모','14']], effect:'근접한 다수의 적을 상대하기 좋은 범위 공격입니다.' },
  flameShot: { id:'flameShot', kind:'rune', socket:'attack', name:'화염탄', sigil:'F', rarity:'epic', rarityLabel:'상급', category:'트리거 공격룬 · 원거리 전용', mana:24, desc:'충돌하거나 지속 시간이 끝나면 다음 룬 배열을 이어서 발동하는 화염탄을 발사합니다.', stats:[['피해 배율','135%'],['지속 시간','2.0초'],['마나 소모','24']], effect:'공격이 종료되면 다음 배열을 즉시 연결합니다.' },
  pierce: { id:'pierce', kind:'rune', socket:'enhance', name:'관통', sigil:'I', rarity:'rare', rarityLabel:'희귀', category:'강화룬 · 범용', mana:7, desc:'같은 배열의 공격이 적을 관통해 뒤의 대상까지 이어집니다.', stats:[['관통 횟수','+2'],['피해 감소','-10%'],['마나 소모','7']], effect:'발사체 또는 직선형 공격에 관통 성질을 추가합니다.' },
  power: { id:'power', kind:'rune', socket:'enhance', name:'피해 증가', sigil:'+', rarity:'common', rarityLabel:'일반', category:'강화룬 · 범용', mana:5, desc:'같은 배열에 장착된 공격룬의 최종 피해량을 증가시킵니다.', stats:[['피해 증가','+22%'],['마나 소모','5'],['중복 보관','가능']], effect:'단순하지만 어떤 공격에도 안정적으로 적용되는 강화룬입니다.' },
  expand: { id:'expand', kind:'rune', socket:'enhance', name:'범위 증가', sigil:'○', rarity:'rare', rarityLabel:'희귀', category:'강화룬 · 범용', mana:8, desc:'같은 배열의 공격 범위를 넓혀 더 많은 적을 타격합니다.', stats:[['범위 증가','+28%'],['마나 소모','8'],['적용 방식','곱연산']], effect:'범위형 공격이나 폭발 공격에 특히 효과적입니다.' },
  tracking: { id:'tracking', kind:'rune', socket:'enhance', name:'추적', sigil:'~', rarity:'epic', rarityLabel:'상급', category:'강화룬 · 원거리 전용', mana:11, desc:'발사체가 가까운 적을 향해 궤도를 보정합니다.', stats:[['추적 강도','높음'],['탐색 범위','보통'],['마나 소모','11']], effect:'빠르게 이동하는 적에게 발사체가 빗나갈 위험을 줄입니다.' },
  ricochet: { id:'ricochet', kind:'rune', socket:'enhance', name:'튕김', sigil:'Z', rarity:'rare', rarityLabel:'희귀', category:'강화룬 · 원거리 전용', mana:9, desc:'적중한 발사체가 주변의 다른 적에게 한 번 튕깁니다.', stats:[['튕김 횟수','+1'],['탐색 범위','짧음'],['마나 소모','9']], effect:'좁은 공간에서 여러 적을 상대할 때 효율이 높습니다.' },
  split: { id:'split', kind:'rune', socket:'enhance', name:'복제', sigil:'Y', rarity:'epic', rarityLabel:'상급', category:'강화룬 · 범용', mana:13, desc:'공격 효과를 복제해 좌우로 하나씩 추가 생성합니다.', stats:[['복제 수','+2'],['개별 피해','70%'],['마나 소모','13']], effect:'공격 범위를 크게 넓히지만 배열의 마나 소모도 증가합니다.' }
};

const itemCatalog = {
  potion: { id:'potion', kind:'item', name:'응급 회복약', sigil:'H', rarity:'common', rarityLabel:'일반', category:'소모 아이템', maxStack:10, desc:'복용하면 잃은 체력의 일부를 즉시 회복합니다. 사용 중에는 이동 속도가 감소합니다.', stats:[['회복량','최대 체력 30%'],['사용 시간','1.2초'],['사용 키','C 길게 누르기']], effect:'사용 도중 키를 놓거나 행동이 취소되면 소모하지 않습니다.' },
  manaVial: { id:'manaVial', kind:'item', name:'마나 응축액', sigil:'M', rarity:'rare', rarityLabel:'희귀', category:'소모 아이템', maxStack:10, desc:'응축된 마나를 흡수해 현재 마나를 빠르게 회복합니다.', stats:[['마나 회복','45'],['사용 시간','0.9초'],['사용 키','C 길게 누르기']], effect:'룬 배열을 많이 사용하는 전투에서 마나 흐름을 회복할 수 있습니다.' },
  sanctuary: { id:'sanctuary', kind:'item', name:'성소의 잔향', sigil:'S', rarity:'epic', rarityLabel:'상급', category:'특수 아이템', maxStack:1, desc:'희미한 천사의 힘이 남아 있는 성소의 파편입니다.', stats:[['성향','빛'],['보유 효과','활성'],['중첩','불가']], effect:'보유한 동안 천사 계열 보상과 관련된 변화가 발생할 수 있습니다.' },
  core: { id:'core', kind:'item', name:'오염된 핵', sigil:'C', rarity:'rare', rarityLabel:'희귀', category:'선택 아이템', maxStack:1, desc:'악마의 힘이 응축된 불안정한 핵입니다. 전투 후 파괴할 수 있습니다.', stats:[['상태','불안정'],['선택','파괴 가능'],['중첩','불가']], effect:'파괴 선택은 영혼의 빛 성향에 영향을 줄 수 있습니다.' },
  gold: { id:'gold', kind:'item', name:'골드', sigil:'G', rarity:'common', rarityLabel:'재화', category:'공용 재화', maxStack:999999, desc:'상점에서 물품을 구매할 때 사용하는 골드입니다. 다른 아이템과 마찬가지로 인벤토리 한 칸에 보관됩니다.', stats:[['보유량','486'],['보관 슬롯','1칸'],['사용처','상점']], effect:'획득한 골드는 이 슬롯의 보유량에 합산됩니다.' }
};

const weapons = {
  sword: {
    id:'sword', name:'정제 장검', art:'sword-art', desc:'룬 각인자를 위해 균형 있게 제작된 장검입니다. 서로 다른 크기의 룬 배열을 안정적으로 운용할 수 있습니다.',
    rarity:'rare', rarityLabel:'희귀', category:'근접 무기 · 장검',
    stats:[['공격력',68,52],['공격 속도',57,'보통'],['무게',46,7]],
    properties:[['강화 소켓','배열별 1~4개'],['유효 거리','짧음'],['고유 효과','안정된 각인']],
    effect:'안정된 각인 · 각 배열의 첫 번째 강화룬 마나 소모량이 1 감소합니다.',
    loadout:[
      { attack:'slashWave', enhance:['pierce','power'] },
      { attack:'spinSlash', enhance:['expand'] },
      { attack:null, enhance:[null,'ricochet',null,null] }
    ]
  },
  pistol: {
    id:'pistol', name:'연구원 권총', art:'pistol-art', desc:'마탑 연구원들이 호신용으로 사용하던 가벼운 권총입니다. 공격을 자주 반복해 룬 효과를 빠르게 순환시키는 데 적합합니다.',
    rarity:'common', rarityLabel:'일반', category:'원거리 무기 · 권총',
    stats:[['공격력',42,31],['공격 속도',82,'빠름'],['무게',22,3]],
    properties:[['강화 소켓','배열별 1~3개'],['유효 거리','보통'],['탄창','10발']],
    effect:'빠른 재정렬 · 무기 교체 후 첫 재장전 시간이 짧아집니다.',
    loadout:[
      { attack:'flameShot', enhance:['tracking'] },
      { attack:null, enhance:[null,'ricochet',null] }
    ]
  },
  axe: {
    id:'axe', name:'균열 도끼', art:'axe-art', desc:'묵직한 일격에 맞춰 각인 회로를 넓게 배치한 도끼입니다. 적은 배열을 강하게 강화하는 데 적합합니다.',
    rarity:'epic', rarityLabel:'상급', category:'근접 무기 · 도끼',
    stats:[['공격력',88,76],['공격 속도',31,'느림'],['무게',79,12]],
    properties:[['강화 소켓','배열별 2~3개'],['유효 거리','짧음'],['고유 효과','파쇄']],
    effect:'파쇄 · 체력이 높은 적에게 첫 타격의 피해량이 증가합니다.',
    loadout:[
      { attack:'spinSlash', enhance:['power',null,null] },
      { attack:'slashWave', enhance:['expand',null] }
    ]
  },
  rifle: {
    id:'rifle', name:'봉인 연구 소총', art:'rifle-art', desc:'봉인 연구동에서 회수한 장거리 소총입니다. 네 개의 룬 배열이 각기 다른 규모로 연결되어 있습니다.',
    rarity:'rare', rarityLabel:'희귀', category:'원거리 무기 · 소총',
    stats:[['공격력',73,61],['공격 속도',51,'보통'],['무게',61,9]],
    properties:[['강화 소켓','배열별 1~4개'],['유효 거리','김'],['탄창','18발']],
    effect:'연쇄 회로 · 네 번째 배열 발동 후 첫 번째 배열의 마나 소모가 감소합니다.',
    loadout:[
      { attack:'flameShot', enhance:['pierce','tracking',null,'split'] },
      { attack:null, enhance:[null] },
      { attack:'slashWave', enhance:['power',null,'ricochet'] },
      { attack:null, enhance:[null,null] }
    ]
  }
};

let inventorySequence = 20;
const INVENTORY_SLOT_COUNT = 60;
const inventorySlots = Array.from({ length:INVENTORY_SLOT_COUNT }, () => null);
[
  { uid:'inv-power-new', itemId:'power', isNew:true },
  { uid:'inv-power-duplicate', itemId:'power', isNew:false },
  { uid:'inv-tracking', itemId:'tracking', isNew:true },
  { uid:'inv-flame', itemId:'flameShot', isNew:false },
  { uid:'inv-potion', itemId:'potion', qty:3, isNew:false },
  { uid:'inv-pierce', itemId:'pierce', isNew:false },
  { uid:'inv-mana', itemId:'manaVial', qty:2, isNew:false },
  { uid:'inv-expand', itemId:'expand', isNew:false },
  { uid:'inv-ricochet', itemId:'ricochet', isNew:false },
  { uid:'inv-split', itemId:'split', isNew:false },
  { uid:'inv-sanctuary', itemId:'sanctuary', qty:1, isNew:false },
  { uid:'inv-core', itemId:'core', qty:1, isNew:false },
  { uid:'inv-slash', itemId:'slashWave', isNew:false },
  { uid:'inv-gold', itemId:'gold', qty:486, isNew:false }
].forEach((entry, index) => { inventorySlots[index] = entry; });
inventorySlots.filter(Boolean).forEach((entry, index) => { entry.acquired = index; });

const itemUseSlots = Array.from({ length:5 }, () => null);

let activeFilter = 'all';
let selectedInventoryUid = null;
let selectedWeapon = 'sword';
let focusedSocket = null;
let detailSelection = { type:'weapon', id:'sword' };
let dragPayload = null;
let heldEntry = null;
let heldOrigin = null;
let heldSnapshot = null;
let locationMode = 'shop';
const floorDrops = [];
let weaponShiftDirection = 0;
let toastTimer;

function allCatalog() {
  return { ...runeCatalog, ...itemCatalog };
}

function inventoryEntry(uid) {
  return inventorySlots.find(entry => entry?.uid === uid) || null;
}

function inventorySlotIndex(uid) {
  return inventorySlots.findIndex(entry => entry?.uid === uid);
}

function firstEmptyInventorySlot() {
  return inventorySlots.findIndex(entry => entry === null);
}

function selectedInventoryItem() {
  const entry = inventoryEntry(selectedInventoryUid);
  return entry ? allCatalog()[entry.itemId] : null;
}

function addInventoryRune(runeId, preferredSlot = -1) {
  const destination = preferredSlot >= 0 && inventorySlots[preferredSlot] === null
    ? preferredSlot
    : firstEmptyInventorySlot();
  if (destination < 0) return null;
  const entry = { uid:`inv-added-${++inventorySequence}`, itemId:runeId, isNew:false, acquired:inventorySequence };
  inventorySlots[destination] = entry;
  return entry.uid;
}

function removeInventoryEntry(uid) {
  const index = inventorySlotIndex(uid);
  if (index < 0) return null;
  const entry = inventorySlots[index];
  inventorySlots[index] = null;
  return entry;
}

function visibleInventorySlots() {
  if (activeFilter === 'all') return inventorySlots.map((entry, slotIndex) => ({ entry, slotIndex }));
  const catalog = allCatalog();
  const occupied = inventorySlots
    .map((entry, slotIndex) => ({ entry, slotIndex }))
    .filter(({ entry }) => entry && catalog[entry.itemId]?.kind === activeFilter);
  const empty = inventorySlots
    .map((entry, slotIndex) => ({ entry, slotIndex }))
    .filter(({ entry }) => entry === null);
  const visible = [...occupied, ...empty];
  while (visible.length < INVENTORY_SLOT_COUNT) visible.push({ entry:null, slotIndex:-1 });
  return visible.slice(0, INVENTORY_SLOT_COUNT);
}

function renderInventory() {
  const catalog = allCatalog();
  const grid = document.getElementById('inventoryGrid');
  const visible = visibleInventorySlots();

  grid.innerHTML = visible.map(({ entry, slotIndex }) => {
    if (!entry) {
      return `<button class="slot empty" data-slot-index="${slotIndex}" type="button" onclick="clickInventorySlot(${slotIndex}, event)" ondragover="allowInventorySlotDrop(event)" ondragleave="clearDropState(event)" ondrop="dropOnInventorySlot(event, ${slotIndex})" aria-label="빈 슬롯${heldEntry ? ' · 들고 있는 대상 배치' : ' · 선택 해제'}"></button>`;
    }
    const item = catalog[entry.itemId];
    const iconClass = item.id === 'gold' ? 'gold' : item.kind === 'item' ? 'item' : item.socket;
    const icon = `<div class="slot-icon ${iconClass}"><span>${item.sigil}</span></div>`;
    const autoEquip = item.kind === 'rune'
      ? `oncontextmenu="autoEquipInventoryRune(event, '${entry.uid}')"`
      : '';
    const interactionLabel = item.kind === 'rune'
      ? ' · 우클릭하여 빈 소켓에 자동 장착 · 드래그하여 슬롯 이동'
      : ' · 드래그하여 슬롯 이동';
    return `<button class="slot ${item.rarity} ${selectedInventoryUid === entry.uid ? 'selected' : ''}" type="button" onclick="selectInventory('${entry.uid}', event)" ${autoEquip} draggable="${isEditingAllowed()}" ${isEditingAllowed() ? `ondragstart="startInventoryDrag(event, '${entry.uid}')" ondragend="endEntryDrag(event)"` : ''} ondragover="allowInventorySlotDrop(event)" ondragleave="clearDropState(event)" ondrop="dropOnInventorySlot(event, ${slotIndex})" aria-label="${item.name}${entry.isNew ? ' · 새 룬' : ''}${interactionLabel}">
      ${entry.isNew && item.kind === 'rune' ? '<span class="new-mark">NEW</span>' : ''}
      ${entry.qty && entry.qty > 1 ? `<span class="slot-qty">${Number(entry.qty).toLocaleString('ko-KR')}</span>` : ''}
      ${icon}<span class="slot-name">${item.name}</span>
    </button>`;
  }).join('');
  renderUseSlots();
  updateHeldRune();
}

function entryMarkup(entry, compact = false) {
  if (!entry) return '';
  const item = allCatalog()[entry.itemId];
  if (!item) return '';
  const iconClass = item.id === 'gold' ? 'gold' : item.kind === 'item' ? 'item' : item.socket;
  return `${entry.qty > 1 ? `<span class="slot-qty">${Number(entry.qty).toLocaleString('ko-KR')}</span>` : ''}<div class="slot-icon ${iconClass}"><span>${item.sigil}</span></div>${compact ? '' : `<span class="slot-name">${item.name}</span>`}`;
}

function renderUseSlots() {
  const holder = document.getElementById('useSlots');
  holder.innerHTML = itemUseSlots.map((entry, index) => `<button class="use-slot" data-key="${index + 1}" type="button" onclick="selectUseSlot(${index}, event)" draggable="${Boolean(entry) && isEditingAllowed()}" ${entry && isEditingAllowed() ? `ondragstart="startUseSlotDrag(event, ${index})" ondragend="endEntryDrag(event)"` : ''} ondragover="allowUseSlotDrop(event)" ondragleave="clearDropState(event)" ondrop="dropOnUseSlot(event, ${index})" aria-label="아이템 사용 슬롯 ${index + 1}${entry ? ` · ${allCatalog()[entry.itemId].name}` : ' · 비어 있음'}">${entryMarkup(entry, true)}</button>`).join('');
}

function renderWeapons() {
  const list = document.getElementById('weaponList');
  const weaponList = Object.values(weapons);
  if (!weaponList.length) {
    list.innerHTML = '<div class="detail-hint">장착된 무기가 없습니다.</div>';
    document.querySelectorAll('.weapon-nav, .discard-weapon-button').forEach(button => { button.disabled = true; });
    return;
  }
  document.querySelectorAll('.weapon-nav').forEach(button => { button.disabled = false; });
  document.querySelectorAll('.discard-weapon-button').forEach(button => { button.disabled = !isEditingAllowed(); });
  const selectedIndex = weaponList.findIndex(weapon => weapon.id === selectedWeapon);
  list.innerHTML = weaponList.map((weapon, index) => {
    let position = 'position-hidden';
    if (index === selectedIndex) position = 'active';
    else if (index === (selectedIndex - 1 + weaponList.length) % weaponList.length) position = 'position-left';
    else if (index === (selectedIndex + 1) % weaponList.length) position = 'position-right';
    const entrance = position === 'active' && weaponShiftDirection ? (weaponShiftDirection > 0 ? 'card-enter-forward' : 'card-enter-backward') : '';
    return `<button class="weapon-card ${position} ${entrance}" type="button" onclick="selectWeapon('${weapon.id}')" draggable="${selectedWeapon === weapon.id && isEditingAllowed()}" ${selectedWeapon === weapon.id && isEditingAllowed() ? `ondragstart="startWeaponDrag(event, '${weapon.id}')" ondragend="endEntryDrag(event)"` : ''} aria-pressed="${selectedWeapon === weapon.id}" aria-label="${weapon.name}${selectedWeapon === weapon.id ? ' · 현재 선택됨 · 인벤토리 밖으로 드래그해 버리기' : ' · 선택하기'}">
      <span class="weapon-index">${index + 1}</span>
      <span class="weapon-art ${weapon.art}"></span>
      <span class="weapon-name">${weapon.name}</span>
    </button>`;
  }).join('');
}

function cycleWeapon(direction) {
  const ids = Object.keys(weapons);
  if (!ids.length) return;
  const currentIndex = ids.indexOf(selectedWeapon);
  const nextIndex = (currentIndex + direction + ids.length) % ids.length;
  selectWeapon(ids[nextIndex], direction);
}

function inferWeaponDirection(id) {
  const ids = Object.keys(weapons);
  const currentIndex = ids.indexOf(selectedWeapon);
  const targetIndex = ids.indexOf(id);
  if (targetIndex === (currentIndex + 1) % ids.length) return 1;
  if (targetIndex === (currentIndex - 1 + ids.length) % ids.length) return -1;
  return 0;
}

function runeById(id) {
  return id ? runeCatalog[id] : null;
}

function renderArrays() {
  const weapon = weapons[selectedWeapon];
  document.getElementById('editingWeapon').textContent = weapon ? weapon.name : '장착 무기 없음';
  const list = document.getElementById('arrayList');
  if (!weapon) {
    list.innerHTML = '<div class="detail-hint">장착된 무기가 없습니다.</div>';
    return;
  }
  list.innerHTML = weapon.loadout.map((array, arrayIndex) => {
    const cost = calculateFinalMana(weapon, array, arrayIndex);
    return `<section class="array-row">
      <div class="array-header">
        <div class="array-label"><span class="array-num">${arrayIndex + 1}</span>룬 배열 ${arrayIndex + 1}</div>
        <div class="mana-cost">마나 ${cost}</div>
      </div>
      <div class="socket-line" style="--line-width:${array.enhance.length * 96}px">
        ${socketButton(arrayIndex, 'attack', 0, array.attack)}
        ${array.enhance.map((id, socketIndex) => socketButton(arrayIndex, 'enhance', socketIndex, id)).join('')}
      </div>
    </section>`;
  }).join('');
  updateSocketCompatibility();
}

function socketButton(arrayIndex, socketType, socketIndex, runeId) {
  const rune = runeById(runeId);
  const key = `${arrayIndex}-${socketType}-${socketIndex}`;
  return `<button class="rune-socket ${socketType} ${rune ? 'filled' : ''} ${focusedSocket === key ? 'focused' : ''}" type="button" data-socket="${socketType}" onclick="clickSocket(${arrayIndex}, '${socketType}', ${socketIndex})" oncontextmenu="unequipSocket(event, ${arrayIndex}, '${socketType}', ${socketIndex})" draggable="${Boolean(rune) && isEditingAllowed()}" ${rune && isEditingAllowed() ? `ondragstart="startSocketDrag(event, ${arrayIndex}, '${socketType}', ${socketIndex}, '${runeId}')" ondragend="endEntryDrag(event)"` : ''} ondragover="allowSocketDrop(event, '${socketType}')" ondragleave="clearDropState(event)" ondrop="dropOnSocket(event, ${arrayIndex}, '${socketType}', ${socketIndex})" aria-label="${rune ? `${rune.name} · 좌클릭 상세 정보${isEditingAllowed() ? ' · 우클릭 장착 해제' : ''}` : `빈 ${socketType === 'attack' ? '공격' : '강화'} 소켓`}">
    <span class="socket-content">${rune ? `<span class="socket-sigil">${rune.sigil}</span><span class="socket-name">${rune.name}</span>` : '<span class="socket-empty">+</span>'}</span>
  </button>`;
}

function updateSocketCompatibility() {
  const selected = dragPayload?.itemId ? runeCatalog[dragPayload.itemId] : heldEntry ? runeCatalog[heldEntry.itemId] : selectedInventoryItem();
  document.querySelectorAll('.rune-socket').forEach(socket => {
    socket.classList.remove('compatible', 'incompatible');
    if (!selected || selected.kind !== 'rune') return;
    socket.classList.add(isEditingAllowed() && socket.dataset.socket === selected.socket && isRuneCompatibleWithWeapon(selected.id, selectedWeapon) ? 'compatible' : 'incompatible');
  });
}

function isEditingAllowed() {
  return locationMode === 'shop';
}

function isRuneCompatibleWithWeapon(runeId, weaponId) {
  const rune = runeCatalog[runeId];
  const weapon = weapons[weaponId];
  if (!rune || !weapon) return false;
  if (rune.socket !== 'attack') return true;
  const isMeleeWeapon = weapon.category.includes('근접');
  if (rune.category.includes('근접 전용')) return isMeleeWeapon;
  if (rune.category.includes('원거리 전용')) return !isMeleeWeapon;
  return true;
}

function calculateFinalMana(weapon, array, arrayIndex) {
  let total = (runeById(array.attack)?.mana || 0) + array.enhance.reduce((sum, id) => sum + (runeById(id)?.mana || 0), 0);
  if (weapon.id === 'sword' && array.enhance[0]) total -= 1;
  if (weapon.id === 'rifle' && arrayIndex === 0) total -= 2;
  return Math.max(0, total);
}

function setLocationMode(mode) {
  cancelHeld();
  locationMode = mode === 'view' ? 'view' : 'shop';
  document.body.classList.toggle('view-only', !isEditingAllowed());
  renderInventory();
  renderWeapons();
  renderArrays();
  showToast(isEditingAllowed() ? '상점 방: 룬 배열을 편집할 수 있습니다.' : '확인 전용: 룬 배열 편집이 잠겼습니다.');
}

function selectInventory(uid, event) {
  event?.stopPropagation();
  if (heldEntry) {
    placeHeldInInventory(inventorySlotIndex(uid));
    return;
  }
  const entry = inventoryEntry(uid);
  if (!entry) return;
  if (!isEditingAllowed()) {
    entry.isNew = false;
    detailSelection = { type:'inventory', uid };
    renderInventory();
    renderDetails();
    return;
  }
  heldSnapshot = captureHeldSnapshot();
  entry.isNew = false;
  const slotIndex = inventorySlotIndex(uid);
  inventorySlots[slotIndex] = null;
  heldEntry = entry;
  heldOrigin = { source:'inventory', slotIndex };
  selectedInventoryUid = null;
  focusedSocket = null;
  detailSelection = { type:'catalog', id:entry.itemId };
  renderInventory();
  renderArrays();
  renderDetails();
  updateHeldRune();
}

function updateHeldRune() {
  const held = document.getElementById('heldRune');
  const entry = heldEntry;
  const item = entry ? allCatalog()[entry.itemId] : null;
  if (!item) {
    held.classList.remove('show');
    held.innerHTML = '';
    return;
  }
  held.innerHTML = entryMarkup(entry, true);
  held.classList.add('show');
}

document.addEventListener('mousemove', event => {
  const held = document.getElementById('heldRune');
  held.style.left = `${event.clientX}px`;
  held.style.top = `${event.clientY}px`;
});

function clickInventorySlot(slotIndex, event) {
  event?.stopPropagation();
  if (heldEntry) placeHeldInInventory(slotIndex);
  else clearSelection(event);
}

function captureHeldSnapshot() {
  return {
    inventory: inventorySlots.map(entry => entry ? { ...entry } : null),
    useSlots: itemUseSlots.map(entry => entry ? { ...entry } : null),
    loadouts: Object.fromEntries(Object.entries(weapons).map(([id, weapon]) => [id, JSON.parse(JSON.stringify(weapon.loadout))]))
  };
}

function canStackEntries(a, b) {
  if (!a || !b || a.itemId !== b.itemId) return false;
  const item = itemCatalog[a.itemId];
  return Boolean(item && item.maxStack > 1);
}

function mergeEntries(incoming, target) {
  const maxStack = itemCatalog[incoming.itemId]?.maxStack || 1;
  const room = Math.max(0, maxStack - (target.qty || 1));
  const moved = Math.min(room, incoming.qty || 1);
  target.qty = (target.qty || 1) + moved;
  incoming.qty = (incoming.qty || 1) - moved;
  return incoming.qty <= 0;
}

function placeHeldInInventory(slotIndex) {
  if (!heldEntry || slotIndex < 0) return false;
  const target = inventorySlots[slotIndex];
  if (canStackEntries(heldEntry, target)) {
    const fullyMerged = mergeEntries(heldEntry, target);
    if (fullyMerged) {
      heldEntry = null;
      heldOrigin = null;
      heldSnapshot = null;
    }
  } else {
    inventorySlots[slotIndex] = heldEntry;
    heldEntry = target;
    if (!target) {
      heldOrigin = null;
      heldSnapshot = null;
    }
  }
  renderInventory();
  renderDetails();
  return true;
}

function cancelHeld() {
  if (!heldEntry) return false;
  if (heldSnapshot) {
    inventorySlots.splice(0, inventorySlots.length, ...heldSnapshot.inventory.map(entry => entry ? { ...entry } : null));
    itemUseSlots.splice(0, itemUseSlots.length, ...heldSnapshot.useSlots.map(entry => entry ? { ...entry } : null));
    Object.entries(heldSnapshot.loadouts).forEach(([id, loadout]) => {
      if (weapons[id]) weapons[id].loadout = JSON.parse(JSON.stringify(loadout));
    });
  }
  heldEntry = null;
  heldOrigin = null;
  heldSnapshot = null;
  renderInventory();
  renderArrays();
  renderDetails();
  return true;
}

function clearSelection(event) {
  event?.stopPropagation();
  if (heldEntry) {
    placeHeldInInventory(event?.currentTarget?.classList?.contains('empty') ? Number(event.currentTarget.dataset.slotIndex) : -1);
    return;
  }
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  renderArrays();
  updateHeldRune();
}

function handleInventoryBlankClick(event) {
  if (event.target.closest('.slot:not(.empty)')) return;
  if (!heldEntry) clearSelection(event);
}

function selectWeapon(id, direction = 0) {
  if (!weapons[id]) return;
  weaponShiftDirection = direction || inferWeaponDirection(id);
  selectedWeapon = id;
  selectedInventoryUid = null;
  focusedSocket = null;
  detailSelection = { type:'weapon', id };
  renderWeapons();
  renderArrays();
  renderInventory();
  renderDetails();
  window.setTimeout(() => document.querySelectorAll('.weapon-card').forEach(card => card.classList.remove('card-enter-forward', 'card-enter-backward')), 300);
}

function getSocketRune(weaponId, arrayIndex, socketType, socketIndex) {
  const array = weapons[weaponId]?.loadout[arrayIndex];
  if (!array) return null;
  return socketType === 'attack' ? array.attack : array.enhance[socketIndex];
}

function setSocketRune(weaponId, arrayIndex, socketType, socketIndex, runeId) {
  const array = weapons[weaponId].loadout[arrayIndex];
  if (socketType === 'attack') array.attack = runeId;
  else array.enhance[socketIndex] = runeId;
}

function finishRuneChange(runeId, arrayIndex, socketType, socketIndex) {
  selectedInventoryUid = null;
  focusedSocket = `${arrayIndex}-${socketType}-${socketIndex}`;
  detailSelection = { type:'socket', id:runeId };
  renderInventory();
  renderArrays();
  renderDetails();
}

function placeInventoryRune(inventoryUid, arrayIndex, socketType, socketIndex) {
  if (!isEditingAllowed()) {
    showToast('현재 장소에서는 룬 배열을 편집할 수 없습니다.');
    return false;
  }
  const entry = inventoryEntry(inventoryUid);
  const chosen = entry ? runeCatalog[entry.itemId] : null;
  if (!chosen) return false;
  if (chosen.socket !== socketType) {
    showToast(`${chosen.name}은(는) ${socketType === 'attack' ? '공격룬' : '강화룬'} 소켓에 장착할 수 없습니다.`);
    return false;
  }
  if (!isRuneCompatibleWithWeapon(chosen.id, selectedWeapon)) {
    showToast(`${chosen.name}은(는) 현재 무기에 장착할 수 없습니다.`);
    return false;
  }

  const currentId = getSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex);
  const sourceSlot = inventorySlotIndex(inventoryUid);
  removeInventoryEntry(inventoryUid);
  if (currentId) addInventoryRune(currentId, sourceSlot);
  setSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex, chosen.id);
  finishRuneChange(chosen.id, arrayIndex, socketType, socketIndex);
  showToast(currentId ? `${chosen.name}을(를) 장착하고 ${runeCatalog[currentId].name}을(를) 보관함으로 옮겼습니다.` : `${chosen.name}을(를) ${arrayIndex + 1}번 배열에 장착했습니다.`);
  return true;
}

function placeHeldRuneInSocket(arrayIndex, socketType, socketIndex) {
  if (!isEditingAllowed()) {
    showToast('현재 장소에서는 룬 배열을 편집할 수 없습니다.');
    return false;
  }
  const rune = heldEntry ? runeCatalog[heldEntry.itemId] : null;
  if (!rune) return false;
  if (rune.socket !== socketType) {
    showToast(`${rune.name}은(는) 해당 소켓에 장착할 수 없습니다.`);
    return false;
  }
  if (!isRuneCompatibleWithWeapon(rune.id, selectedWeapon)) {
    showToast(`${rune.name}은(는) 현재 무기에 장착할 수 없습니다.`);
    return false;
  }
  const currentId = getSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex);
  setSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex, rune.id);
  if (currentId) {
    heldEntry = { uid:`held-${++inventorySequence}`, itemId:currentId, isNew:false, acquired:inventorySequence };
  } else {
    heldEntry = null;
    heldOrigin = null;
    heldSnapshot = null;
  }
  focusedSocket = `${arrayIndex}-${socketType}-${socketIndex}`;
  detailSelection = { type:'socket', id:rune.id };
  renderInventory();
  renderArrays();
  renderDetails();
  showToast(currentId ? `${rune.name}과(와) ${runeCatalog[currentId].name}을(를) 교체했습니다.` : `${rune.name}을(를) 장착했습니다.`);
  return true;
}

function firstCompatibleEmptySocket(socketType) {
  const weapon = weapons[selectedWeapon];
  if (!weapon) return null;

  for (let arrayIndex = 0; arrayIndex < weapon.loadout.length; arrayIndex += 1) {
    const array = weapon.loadout[arrayIndex];
    if (socketType === 'attack') {
      if (!array.attack) return { arrayIndex, socketType:'attack', socketIndex:0 };
      continue;
    }
    for (let socketIndex = 0; socketIndex < array.enhance.length; socketIndex += 1) {
      if (!array.enhance[socketIndex]) {
        return { arrayIndex, socketType:'enhance', socketIndex };
      }
    }
  }
  return null;
}

function autoEquipInventoryRune(event, inventoryUid) {
  event.preventDefault();
  event.stopPropagation();
  if (heldEntry) {
    cancelHeld();
    return;
  }
  if (!isEditingAllowed()) {
    showToast('현재 장소에서는 룬을 자동 장착할 수 없습니다.');
    return;
  }
  const entry = inventoryEntry(inventoryUid);
  const rune = entry ? runeCatalog[entry.itemId] : null;
  if (!rune) return;

  if (!isRuneCompatibleWithWeapon(rune.id, selectedWeapon)) {
    showToast(`${rune.name}은(는) 현재 무기에 장착할 수 없습니다.`);
    return;
  }
  const destination = firstCompatibleEmptySocket(rune.socket);
  if (!destination) {
    showToast(`${rune.socket === 'attack' ? '공격룬' : '강화룬'}을 장착할 빈 슬롯이 없습니다.`);
    return;
  }
  placeInventoryRune(
    inventoryUid,
    destination.arrayIndex,
    destination.socketType,
    destination.socketIndex
  );
}

function clickSocket(arrayIndex, socketType, socketIndex) {
  const currentId = getSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex);
  const key = `${arrayIndex}-${socketType}-${socketIndex}`;
  if (heldEntry) {
    const heldRune = runeCatalog[heldEntry.itemId];
    if (!heldRune) return;
    placeHeldRuneInSocket(arrayIndex, socketType, socketIndex);
    return;
  }
  const selected = selectedInventoryItem();
  if (selectedInventoryUid && selected?.kind === 'rune') {
    placeInventoryRune(selectedInventoryUid, arrayIndex, socketType, socketIndex);
    return;
  }
  if (currentId) {
    selectedInventoryUid = null;
    focusedSocket = key;
    detailSelection = { type:'socket', id:currentId };
    renderInventory();
    renderArrays();
    renderDetails();
    return;
  }
  focusedSocket = key;
  renderArrays();
}

function unequipSocket(event, arrayIndex, socketType, socketIndex) {
  event.preventDefault();
  event.stopPropagation();
  if (heldEntry) {
    cancelHeld();
    return;
  }
  if (!isEditingAllowed()) {
    showToast('현재 장소에서는 룬을 장착 해제할 수 없습니다.');
    return;
  }
  const runeId = getSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex);
  if (!runeId) {
    clearSelection();
    return;
  }
  const destination = firstEmptyInventorySlot();
  if (destination < 0) {
    showToast('보관함에 빈 슬롯이 없습니다.');
    return;
  }
  setSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex, null);
  addInventoryRune(runeId, destination);
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  renderArrays();
  updateHeldRune();
  showToast(`${runeCatalog[runeId].name}을(를) 장착 해제했습니다.`);
}

function beginEntryDrag(event, payload) {
  dragPayload = payload;
  event.currentTarget.classList.add('drag-source');
  document.body.classList.add('dragging-entry');
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', JSON.stringify(payload));
  }
  if (payload.source === 'socket') detailSelection = { type:'socket', id:payload.itemId };
  else if (payload.source === 'inventory') detailSelection = { type:'inventory', uid:payload.inventoryUid };
  else if (payload.source === 'useSlot') detailSelection = { type:'catalog', id:payload.itemId };
  if (payload.source !== 'weapon') renderDetails();
  updateSocketCompatibility();
}

function startInventoryDrag(event, inventoryUid) {
  if (!isEditingAllowed()) return;
  const entry = inventoryEntry(inventoryUid);
  if (!entry || !allCatalog()[entry.itemId]) return;
  selectedInventoryUid = inventoryUid;
  focusedSocket = null;
  beginEntryDrag(event, { source:'inventory', inventoryUid, itemId:entry.itemId });
}

function startSocketDrag(event, arrayIndex, socketType, socketIndex, runeId) {
  if (!isEditingAllowed()) return;
  selectedInventoryUid = null;
  focusedSocket = `${arrayIndex}-${socketType}-${socketIndex}`;
  beginEntryDrag(event, { source:'socket', weaponId:selectedWeapon, arrayIndex, socketType, socketIndex, itemId:runeId });
}

function startUseSlotDrag(event, slotIndex) {
  if (!isEditingAllowed()) return;
  const entry = itemUseSlots[slotIndex];
  if (!entry) return;
  beginEntryDrag(event, { source:'useSlot', slotIndex, itemId:entry.itemId });
}

function startWeaponDrag(event, weaponId) {
  if (!isEditingAllowed()) return;
  beginEntryDrag(event, { source:'weapon', weaponId });
  document.body.classList.add('dragging-weapon');
}

function clearDropState(event) {
  if (event?.currentTarget?.contains(event.relatedTarget)) return;
  event?.currentTarget?.classList.remove('drop-ready');
}

function clearAllDragStyles() {
  document.body.classList.remove('dragging-entry');
  document.querySelectorAll('.drag-source, .drop-ready').forEach(element => element.classList.remove('drag-source', 'drop-ready'));
}

function endEntryDrag() {
  dragPayload = null;
  clearAllDragStyles();
  updateSocketCompatibility();
  document.body.classList.remove('dragging-weapon');
}

function allowSocketDrop(event, socketType) {
  const rune = dragPayload ? runeCatalog[dragPayload.itemId] : null;
  if (!isEditingAllowed() || !rune || rune.socket !== socketType || !isRuneCompatibleWithWeapon(rune.id, selectedWeapon)) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drop-ready');
}

function moveSocketRune(payload, arrayIndex, socketType, socketIndex) {
  if (!isEditingAllowed()) return false;
  const runeId = getSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex);
  const rune = runeCatalog[runeId];
  if (!rune || rune.socket !== socketType || !isRuneCompatibleWithWeapon(rune.id, selectedWeapon)) {
    showToast(`${rune?.name || '이 룬'}은(는) 현재 무기에 장착할 수 없습니다.`);
    return false;
  }
  const sameSocket = payload.weaponId === selectedWeapon && payload.arrayIndex === arrayIndex && payload.socketType === socketType && payload.socketIndex === socketIndex;
  if (sameSocket) return true;
  const destinationId = getSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex);
  setSocketRune(selectedWeapon, arrayIndex, socketType, socketIndex, runeId);
  setSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex, destinationId || null);
  finishRuneChange(runeId, arrayIndex, socketType, socketIndex);
  showToast(destinationId ? `${rune.name}과(와) ${runeCatalog[destinationId].name}의 위치를 바꿨습니다.` : `${rune.name}을(를) ${arrayIndex + 1}번 배열로 이동했습니다.`);
  return true;
}

function dropOnSocket(event, arrayIndex, socketType, socketIndex) {
  event.preventDefault();
  event.stopPropagation();
  const payload = dragPayload;
  if (!payload) return;
  if (payload.source === 'inventory') placeInventoryRune(payload.inventoryUid, arrayIndex, socketType, socketIndex);
  else moveSocketRune(payload, arrayIndex, socketType, socketIndex);
  endEntryDrag();
}

function allowInventoryDrop(event) {
  if (!dragPayload) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drop-ready');
}

function allowInventorySlotDrop(event) {
  if (!dragPayload) return;
  event.preventDefault();
  event.stopPropagation();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drop-ready');
}

function allowUseSlotDrop(event) {
  const item = dragPayload ? allCatalog()[dragPayload.itemId] : null;
  if (!item || item.kind !== 'item' || item.id === 'gold') return;
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.add('drop-ready');
}

function dropOnUseSlot(event, targetIndex) {
  event.preventDefault();
  event.stopPropagation();
  const payload = dragPayload;
  const item = payload ? allCatalog()[payload.itemId] : null;
  if (!payload || !item || item.kind !== 'item' || item.id === 'gold') {
    showToast('사용 가능한 아이템만 배치할 수 있습니다.');
    return;
  }
  if (payload.source === 'inventory') {
    const source = inventorySlotIndex(payload.inventoryUid);
    const incoming = source >= 0 ? inventorySlots[source] : null;
    if (!incoming) return;
    const previous = itemUseSlots[targetIndex];
    if (canStackEntries(incoming, previous)) {
      if (mergeEntries(incoming, previous)) inventorySlots[source] = null;
    } else {
      itemUseSlots[targetIndex] = incoming;
      inventorySlots[source] = previous;
    }
  } else if (payload.source === 'useSlot') {
    const previous = itemUseSlots[targetIndex];
    const incoming = itemUseSlots[payload.slotIndex];
    if (canStackEntries(incoming, previous)) {
      if (mergeEntries(incoming, previous)) itemUseSlots[payload.slotIndex] = null;
    } else {
      itemUseSlots[targetIndex] = incoming;
      itemUseSlots[payload.slotIndex] = previous;
    }
  }
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  showToast(`${item.name}을(를) ${targetIndex + 1}번 사용 슬롯에 배치했습니다.`);
  endEntryDrag();
}

function moveUseSlotToInventory(sourceIndex, targetSlot = -1) {
  const entry = itemUseSlots[sourceIndex];
  if (!entry) return false;
  const destination = targetSlot >= 0 ? targetSlot : firstEmptyInventorySlot();
  if (destination < 0) {
    showToast('보관함에 빈 슬롯이 없습니다.');
    return false;
  }
  const previous = inventorySlots[destination];
  if (canStackEntries(entry, previous)) {
    if (mergeEntries(entry, previous)) itemUseSlots[sourceIndex] = null;
    renderInventory();
    return true;
  }
  if (previous && (allCatalog()[previous.itemId]?.kind !== 'item' || previous.itemId === 'gold') && firstEmptyInventorySlot() < 0) {
    showToast('보관함에 교환할 빈 슬롯이 없습니다.');
    return false;
  }
  inventorySlots[destination] = entry;
  itemUseSlots[sourceIndex] = previous && allCatalog()[previous.itemId]?.kind === 'item' && previous.itemId !== 'gold' ? previous : null;
  if (previous && !itemUseSlots[sourceIndex]) {
    const fallback = firstEmptyInventorySlot();
    if (fallback >= 0) inventorySlots[fallback] = previous;
  }
  renderInventory();
  return true;
}

function selectUseSlot(index, event) {
  event?.stopPropagation();
  const entry = itemUseSlots[index];
  if (!isEditingAllowed()) {
    if (entry) {
      detailSelection = { type:'catalog', id:entry.itemId };
      renderDetails();
    }
    return;
  }
  if (heldEntry) {
    placeHeldInUseSlot(index);
    return;
  }
  if (entry) {
    heldSnapshot = captureHeldSnapshot();
    itemUseSlots[index] = null;
    heldEntry = entry;
    heldOrigin = { source:'useSlot', slotIndex:index };
    detailSelection = { type:'catalog', id:entry.itemId };
    renderInventory();
    renderDetails();
    return;
  }
  selectedInventoryUid = null;
  focusedSocket = null;
  if (entry) {
    detailSelection = { type:'catalog', id:entry.itemId };
    renderDetails();
  }
  renderInventory();
}

function placeHeldInUseSlot(index) {
  const item = heldEntry ? itemCatalog[heldEntry.itemId] : null;
  if (!item || item.id === 'gold') {
    showToast('사용 가능한 아이템만 배치할 수 있습니다.');
    return false;
  }
  const target = itemUseSlots[index];
  if (canStackEntries(heldEntry, target)) {
    const fullyMerged = mergeEntries(heldEntry, target);
    if (fullyMerged) {
      heldEntry = null;
      heldOrigin = null;
      heldSnapshot = null;
    }
  } else {
    itemUseSlots[index] = heldEntry;
    heldEntry = target;
    if (!target) {
      heldOrigin = null;
      heldSnapshot = null;
    }
  }
  renderInventory();
  renderDetails();
  return true;
}

function allowWeaponDiscard(event) {
  if (dragPayload?.source !== 'weapon') return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
}

function allowOutsideDiscard(event) {
  if (!dragPayload) return;
  if (dragPayload.source === 'socket' && !isEditingAllowed()) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
}

function discardOutside(event) {
  event.preventDefault();
  const payload = dragPayload;
  if (!payload) return;
  if (payload.source === 'weapon') {
    discardWeapon(payload.weaponId);
  } else if (payload.source === 'inventory') {
    const entry = removeInventoryEntry(payload.inventoryUid);
    if (entry) floorDrops.push({ type:'entry', data:entry });
  } else if (payload.source === 'useSlot') {
    const entry = itemUseSlots[payload.slotIndex];
    itemUseSlots[payload.slotIndex] = null;
    if (entry) floorDrops.push({ type:'entry', data:entry });
  } else if (payload.source === 'socket' && isEditingAllowed()) {
    const runeId = getSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex);
    if (runeId) {
      setSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex, null);
      floorDrops.push({ type:'entry', data:{ uid:`floor-${++inventorySequence}`, itemId:runeId, isNew:false } });
    }
  }
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  renderArrays();
  renderDetails();
  showToast('바닥에 버렸습니다.');
  endEntryDrag();
}

function dropHeldOutside(event) {
  if (!heldEntry || document.body.classList.contains('closed')) return;
  event?.stopPropagation();
  floorDrops.push({ type:'entry', data:heldEntry });
  heldEntry = null;
  heldOrigin = null;
  heldSnapshot = null;
  renderInventory();
  renderArrays();
  renderDetails();
  showToast('바닥에 버렸습니다.');
}

function discardDraggedWeapon(event) {
  event.preventDefault();
  const weaponId = dragPayload?.source === 'weapon' ? dragPayload.weaponId : null;
  if (!weaponId || !weapons[weaponId]) return;
  discardWeapon(weaponId);
  endEntryDrag();
}

function discardSelectedWeapon() {
  if (!isEditingAllowed()) {
    showToast('현재 장소에서는 무기를 버릴 수 없습니다.');
    return;
  }
  discardWeapon(selectedWeapon);
}

function discardWeapon(weaponId) {
  if (!weaponId || !weapons[weaponId]) return;
  const discardedName = weapons[weaponId].name;
  floorDrops.push({ type:'weapon', data:JSON.parse(JSON.stringify(weapons[weaponId])) });
  delete weapons[weaponId];
  selectedWeapon = Object.keys(weapons)[0] || null;
  detailSelection = selectedWeapon ? { type:'weapon', id:selectedWeapon } : { type:'none' };
  selectedInventoryUid = null;
  focusedSocket = null;
  renderWeapons();
  renderArrays();
  renderInventory();
  renderDetails();
  showToast(`${discardedName}을(를) 버렸습니다.`);
}

function moveInventoryEntry(uid, targetSlot) {
  const sourceSlot = inventorySlotIndex(uid);
  if (sourceSlot < 0) return false;
  const destination = targetSlot >= 0 ? targetSlot : firstEmptyInventorySlot();
  if (destination < 0 || destination === sourceSlot) return false;
  const destinationEntry = inventorySlots[destination];
  if (canStackEntries(inventorySlots[sourceSlot], destinationEntry)) {
    if (mergeEntries(inventorySlots[sourceSlot], destinationEntry)) inventorySlots[sourceSlot] = null;
  } else {
    inventorySlots[destination] = inventorySlots[sourceSlot];
    inventorySlots[sourceSlot] = destinationEntry;
  }
  selectedInventoryUid = uid;
  focusedSocket = null;
  detailSelection = { type:'inventory', uid };
  renderInventory();
  renderDetails();
  updateSocketCompatibility();
  return true;
}

function unequipDraggedSocket(payload, preferredSlot = -1) {
  const runeId = getSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex);
  if (!runeId) return false;
  const destination = preferredSlot >= 0 && inventorySlots[preferredSlot] === null
    ? preferredSlot
    : firstEmptyInventorySlot();
  if (destination < 0) {
    showToast('보관함에 빈 슬롯이 없습니다.');
    return false;
  }
  setSocketRune(payload.weaponId, payload.arrayIndex, payload.socketType, payload.socketIndex, null);
  addInventoryRune(runeId, destination);
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  renderArrays();
  updateSocketCompatibility();
  showToast(`${runeCatalog[runeId].name}을(를) 보관함으로 옮겼습니다.`);
  return true;
}

function dropOnInventorySlot(event, targetSlot) {
  event.preventDefault();
  event.stopPropagation();
  const payload = dragPayload;
  if (!payload) return;
  if (payload.source === 'inventory') moveInventoryEntry(payload.inventoryUid, targetSlot);
  else if (payload.source === 'socket') unequipDraggedSocket(payload, targetSlot);
  else if (payload.source === 'useSlot') moveUseSlotToInventory(payload.slotIndex, targetSlot);
  endEntryDrag();
}

function dropOnInventory(event) {
  event.preventDefault();
  event.stopPropagation();
  const payload = dragPayload;
  if (!payload) return;
  if (payload.source === 'inventory') moveInventoryEntry(payload.inventoryUid, -1);
  else if (payload.source === 'socket') unequipDraggedSocket(payload, -1);
  else if (payload.source === 'useSlot') moveUseSlotToInventory(payload.slotIndex, -1);
  endEntryDrag();
}

function setFilter(filter, button) {
  activeFilter = filter;
  document.querySelectorAll('.filter-button').forEach(btn => btn.classList.toggle('active', btn === button));
  selectedInventoryUid = null;
  focusedSocket = null;
  renderInventory();
  renderArrays();
}

function sortInventory(mode = 'acquired') {
  const priority = { epic:0, rare:1, common:2 };
  const catalog = allCatalog();
  const entries = inventorySlots.filter(Boolean).sort((a, b) => {
    const aa = catalog[a.itemId];
    const bb = catalog[b.itemId];
    if (mode === 'type') return aa.kind.localeCompare(bb.kind) || aa.name.localeCompare(bb.name, 'ko');
    if (mode === 'name') return aa.name.localeCompare(bb.name, 'ko');
    if (mode === 'rarity') return priority[aa.rarity] - priority[bb.rarity] || aa.name.localeCompare(bb.name, 'ko');
    return (a.acquired ?? 9999) - (b.acquired ?? 9999);
  });
  inventorySlots.fill(null);
  entries.forEach((entry, index) => { inventorySlots[index] = entry; });
  renderInventory();
  const labels = { acquired:'획득순', type:'종류순', name:'이름순', rarity:'등급순' };
  showToast(`${labels[mode]}으로 자동 정렬했습니다.`);
}

function renderDetails() {
  const content = document.getElementById('detailsContent');
  const kind = document.getElementById('detailKind');
  let data = null;
  let type = detailSelection.type;
  if (type === 'weapon') data = weapons[detailSelection.id];
  if (type === 'socket') data = runeCatalog[detailSelection.id];
  if (type === 'inventory') {
    const entry = inventoryEntry(detailSelection.uid);
    data = entry ? allCatalog()[entry.itemId] : null;
  }
  if (type === 'catalog') data = allCatalog()[detailSelection.id];
  if (!data) {
    kind.textContent = '';
    content.innerHTML = '';
    content.classList.add('empty');
    return;
  }

  content.classList.remove('empty');
  const isWeapon = type === 'weapon';
  const symbolClass = isWeapon ? 'weapon' : data.id === 'gold' ? 'gold' : data.kind === 'item' ? 'item' : data.socket;
  const rarityClass = data.rarity === 'common' ? 'common' : data.rarity === 'epic' ? 'epic' : '';
  kind.textContent = isWeapon ? '무기' : data.kind === 'item' ? '아이템' : '룬';
  const coreStats = isWeapon
    ? `<div class="stat-list">${data.stats.map(([label, width, value]) => `<div class="stat-row"><span>${label}</span><span class="stat-track"><span style="width:${width}%"></span></span><span class="stat-value">${value}</span></div>`).join('')}</div>`
    : `<div class="property-grid">${data.stats.map(([label, value]) => `<div class="property"><div class="property-label">${label}</div><div class="property-value">${value}</div></div>`).join('')}</div>`;
  const properties = isWeapon
    ? `<div class="detail-rule"></div><div class="property-grid">${data.properties.map(([label, value]) => `<div class="property"><div class="property-label">${label}</div><div class="property-value">${value}</div></div>`).join('')}</div>`
    : '';
  const hint = type === 'socket' ? '<div class="detail-hint">장착된 룬을 우클릭하면 즉시 보관함으로 돌아갑니다.</div>' : '';
  content.innerHTML = `
    <div class="detail-hero"><div class="detail-symbol ${symbolClass}"><span>${isWeapon ? data.name.slice(0,2) : data.sigil}</span></div></div>
    <div class="rarity ${rarityClass}">${data.rarityLabel}</div>
    <h2 class="detail-name">${data.name}</h2>
    <div class="detail-sub">${data.category}</div>
    <div class="detail-rule"></div>
    <p class="detail-description">${data.desc}</p>
    <div class="detail-rule"></div>
    ${coreStats}
    ${properties}
    <div class="effect-box"><strong>${isWeapon ? '고유 효과' : '효과 설명'}</strong>${data.effect}</div>
    ${hint}`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1900);
}

function toggleInventory(open) {
  if (!open) cancelHeld();
  document.body.classList.toggle('closed', !open);
}

document.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'e' && !event.repeat) {
    toggleInventory(document.body.classList.contains('closed'));
    event.preventDefault();
    return;
  }
  if (event.key === 'Escape' && !document.body.classList.contains('closed')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    toggleInventory(false);
  }
}, true);

document.addEventListener('contextmenu', event => {
  if (!heldEntry) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  cancelHeld();
}, true);

const inventoryShell = document.querySelector('.inventory-shell');
inventoryShell.addEventListener('click', event => {
  if (event.target.closest('button')) return;
  clearSelection(event);
});
inventoryShell.addEventListener('contextmenu', event => {
  event.preventDefault();
  if (heldEntry) cancelHeld();
  else clearSelection(event);
});

renderInventory();
renderWeapons();
renderArrays();
renderDetails();
