import Character, {Magician, Daemon} from '../Character';

test('usual attack', () => {
  const mag = new Magician();
  mag.attack = 1;

  expect(mag.attack).toBe(100);
});

test('usual attack with distance 3', () => {
  const mag = new Magician();
  mag.attack = 3;

  expect(mag.attack).toBe(80);
});

test('usual attack with distance 6', () => {
  const mag = new Magician();
  mag.attack = 6;

  expect(mag.attack).toBe(60);
});

test('stoned deamon attack in distance 1', () => {
  const demom = new Daemon();
  demom.stoned = 1;

  expect(demom.stoned).toBe(100);
});

test('stoned deamon attack in distance 2', () => {
  const demon = new Daemon();
  demon.stoned = 2;

  expect(demon.stoned).toBe(85);
});

test('stoned deamon attack in distance 6', () => {
  const demon = new Daemon();
  demon.stoned = 6;

  expect(demon.stoned).toBe(50);
});