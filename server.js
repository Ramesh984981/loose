http.createServer((req, res) => {
    res.write('hello world!!');
    res.end();
    console.log('server running...');
  }).on('error', (err) => {
    console.error('Server error:', err);
  }).listen(8080);
  