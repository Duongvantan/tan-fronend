$(document).ready(function () {
  let todos = [
    {
      id: 'TKN6hNGUKLku',
      name: 'sleeping edit',
      level: 1,
    },
    {
      id: '0pFCb91IAXG3',
      name: 'eating',
      level: 3,
    },
    {
      id: 'B40IcbJE6hvt',
      name: 'todo new',
      level: 2,
    },
    {
      id: '2x67mzguYqBb',
      name: 'todo 2',
      level: 1,
    },
    {
      id: '3UkoQlHEqC7n',
      name: 'todo 3',
      level: 1,
    },
    {
      id: 'VWWvjAThAjE6',
      name: 'todo 4',
      level: 2,
    },
    {
      id: 'HBuU2Kf37zlo',
      name: 'todo 5',
      level: 3,
    },
    {
      id: 'vlFusc6SqTVv',
      name: 'todo 6',
      level: 1,
    },
    {
      id: 'QQJXS7MLlY2S',
      name: 'coding',
      level: 3,
    },
    {
      id: 'l2KRHVXmFva2',
      name: 'dfdfg',
      level: 1,
    },
  ];

  let idEdit = '';
  const elTodos = $('#todos');
  const inputName = $('#name');
  const inputLevel = $('#level');
  const btnSave = $('#btn-save');
  const slbSortBy = $('#sort-by');
  const slbSortDir = $('#sort-dir');
  const slbFilterLevel = $('#filter-level');
  let sortBy = 'name';
  let sortDir = 'asc'; // asc -> tăng dần, desc -> giảm dần

  const elListTest = $('.list-test');

  elListTest.on('click', '.item-test', function () {
    console.log(123);
  });

  elListTest.html(`
  <li class="item-test">item1</li>
  <li class="item-test">item2</li>
  <li class="item-test">item3</li>
  <li class="item-test">item4</li>
  <li class="">item5</li>
  <li class="">item6</li>
  <li class="t">item7</li>
  `);

  // let itemTest = $('.item-test');

  // console.log('itemTest', itemTest);

  // itemTest.on('click', function () {
  //   // this -> là phần tử mình đang tương tác (el trong js thuần)
  //   // $(this) -> jquery
  //   console.log($(this).html());
  // });

  // addEventListener -> on
  btnSave.on('click', function () {
    console.log('inputName', inputName.val());
    inputName.val('xcsdffsf23')
  });

  // getELementById, getElementsByClassName, ..... querySelector,, querySelectorAll
  // $('#todos'), $('.abc'), $(input[name="email"])

  renderTodos(todos);

  elTodos.on('click', '.btn-delete', function () {
    const el = $(this);
    const id = el.data('id');
    console.log('id', id);
  })

  function renderTodos(items) {
    let html = '';
    items.forEach((item) => {
      let levelColor = '';
      let levelText = '';

      switch (item.level) {
        case 1:
          levelColor = 'secondary';
          levelText = 'Thấp';
          break;
        case 2:
          levelColor = 'info';
          levelText = 'Bình thường';
          break;
        case 3:
          levelColor = 'danger';
          levelText = 'Cao';
          break;
      }

      html += `
      <li class="item mb-1">
        <div class="d-flex align-items-center justify-content-between">
          <span role="button">${item.name}</span>
          <span class="badge bg-${levelColor}">${levelText}</span>
          <div class="action">
            <button class="btn btn-sm btn-primary btn-edit" data-id="${item.id}">
              Sửa
            </button>
            <button class="btn btn-sm btn-danger btn-delete" data-id="${item.id}">
              Delete
            </button>
          </div>
        </div>
      </li>`;
    });
    elTodos.html(html);
    // el.html(noidung) // set
    // el.html() // get
    // elTodos.innerHTML = html;
  }

  function makeId(length = 12) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters[Math.floor(Math.random() * charactersLength)];
      counter += 1;
    }
    return result;
  }
});
