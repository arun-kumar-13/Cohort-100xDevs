function delay()
{
  return new Promise(function(resolve)
  {
    setTimeout(resolve, 1000);
  });
}

async function updateCounter(count)
{
  await delay();
  console.log(count++);
  updateCounter(count);
}
updateCounter(0);