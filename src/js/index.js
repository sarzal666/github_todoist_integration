const renderBtns = () => {
    const comp = document.createElement("button");
    comp.id = "auth";
    comp.innerText = "gith auth";

    const wrapper = document.querySelector(".wrapper");
    wrapper.prepend(comp);

    comp.addEventListener("click", async (e) => {
      try {
        const res = await call('https://api.github.com/repos', reqParams);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    });
  };

  //
  const urls = {
    basic: "https://api.github.com",
    repos: 'https://api.github.com/repos/sarzal666'
  };

  console.log(urls);

  const reqParams = {
    method: "GET",
    Authentication: `Token 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`,
  };

  const call = async (url, params) => {
    const result = await fetch(url);

    return result.json();
  };


  renderBtns();