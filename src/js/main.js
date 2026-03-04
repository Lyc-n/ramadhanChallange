let count = 0;
let target = 100;

const counter = document.getElementById("counter");
const btn = document.getElementById("count-btn");
const reset = document.getElementById("reset-btn");
const badge = document.getElementById("badge");
const dzikirPreset = document.getElementById("dzikir-preset");
const progress = document.getElementById("progress");

const presets = document.querySelectorAll(".preset");

function showToast() {
  badge.classList.remove("opacity-0", "translate-y-20");
  badge.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    badge.classList.add("opacity-0", "translate-y-20");
    badge.classList.remove("opacity-100", "translate-y-0");
  }, 2500);
}

btn.onclick = () => {
  if (count >= target) return;

  count++;
  counter.innerText = count;

  let percent = Math.min((count / target) * 100, 100);
  progress.style.width = percent + "%";

  if (count === target) {
    showToast();
  }
};

reset.onclick = () => {
  count = 0;
  counter.innerText = count;
  progress.style.width = "0%";

  badge.classList.add("opacity-0", "translate-y-20");
};

presets.forEach((preset) => {
  preset.onclick = () => {
    count = 0;
    counter.innerText = 0;

    target = parseInt(preset.dataset.target);
    dzikirPreset.innerText = preset.dataset.name;

    progress.style.width = "0%";

    badge.classList.add("opacity-0", "translate-y-20");

    // reset semua tombol
    presets.forEach((btn) => {
      btn.classList.remove("text-black", "border-yellow-400", "bg-yellow-400");
      btn.classList.add("bg-emerald-900", "text-white");
    });

    // tombol aktif
    preset.classList.remove("bg-emerald-900", "text-white");
    preset.classList.add("bg-yellow-400", "text-black", "border-yellow-400");
  };
});