let i = 0;
let text =
  'Because of the pandemic, we are adviced to maintain social distance and wear a mask. Covid transmits through respiratory droplets, which makes "talking" a dangerous behavior. But how to communicate? Maybe it\'s time to learn a sign lanugage!';

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
