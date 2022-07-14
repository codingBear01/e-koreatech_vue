const aDirective = {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
    el.innerHTML = `
      el.tagName: ${el.tagName}<br />
      el.parentNode.tagName: ${el.parentNode.tagName}<br />
      binding.value: ${binding.value}<br />
      binding.arg: ${binding.arg}<br />
      binding.modifiers: ${JSON.stringify(binding.modifiers)}
    `;
    el.style.background = binding.value;
  },
};

export default aDirective;
