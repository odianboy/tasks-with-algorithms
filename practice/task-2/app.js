little_data_link = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
big_db_link = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'

$("#btn").on("change", function(){
    $('#dataInfo').DataTable().ajax.url(big_db_link + encodeURIComponent(this.value)).load();
});

$('#dataInfo').DataTable({
    lengthMenu: [5, 25, 50],
    processing: true,
    serverSide: false,
    ajax: {
        url: little_data_link,
        dataSrc: ''
    },
    columns: [
        {data: 'id'},
        {data: 'firstName'},
        {data: 'lastName'},
        {data: 'email'},
        {data: 'phone'}
    ]
});
