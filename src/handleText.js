let i = 0;
let text =
  'Because of the pandemic, we have to stay 6 feet or more from each other. Even that distance might not be enough. But we need to communicate, we need to "talk" somehow. Let\'s learn a sign language. Say hello to people at parks using ASL';

const nextButton = document.getElementById('next');
const policyText = document.getElementById('policy');
const core = document.getElementById('core');
policyText.style.display = 'none';
nextButton.style.display = 'none';
core.style.display = 'none';

export default async function typeWriter() {
  if (i < text.length) {
    document.getElementById('modal-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
  if (i === text.length) {
    policyText.style.display = '';
    nextButton.style.display = 'flex';
    nextButton.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
      core.style.display = 'flex';
      document.getElementById('nextGesture').style.display = 'flex';
    });
  }
}
