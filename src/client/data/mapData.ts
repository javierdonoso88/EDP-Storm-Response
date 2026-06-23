// Real GPS coordinates for faults in the Área Metropolitana de Lisboa
// [lat, lng] — WGS84
export const FAULT_COORDS: Record<string, [number, number]> = {
  // === SWITCHABLE FAULTS (rede subterrânea / telecomando) ===
  'SW-001': [38.7100, -9.1395],  // Lisboa Baixa
  'SW-002': [38.7140, -9.1280],  // Lisboa Alfama
  'SW-003': [38.7350, -9.1970],  // Lisboa Benfica
  'SW-004': [38.7700, -9.1560],  // Lisboa Lumiar
  'SW-005': [38.7650, -9.1060],  // Lisboa Olivais
  'SW-006': [38.7950, -9.1780],  // Odivelas Centro
  'SW-007': [38.8310, -9.1460],  // Loures Sul
  'SW-008': [38.7530, -9.2300],  // Amadora Centro
  'SW-009': [38.7420, -9.2280],  // Amadora Venteira
  'SW-010': [38.6980, -9.3010],  // Oeiras Centro
  'SW-011': [38.6972, -9.4207],  // Cascais Centro
  'SW-012': [38.7010, -9.3960],  // Cascais Estoril
  'SW-013': [38.6766, -9.1564],  // Almada Centro
  'SW-014': [38.6806, -9.1291],  // Almada Cacilhas
  'SW-015': [38.6332, -9.1016],  // Seixal Centro
  'SW-016': [38.6623, -9.0645],  // Barreiro Centro
  'SW-017': [38.7064, -8.9752],  // Montijo
  'SW-018': [38.5700, -8.9080],  // Palmela
  'SW-019': [38.5500, -8.8930],  // Setúbal Norte
  'SW-020': [38.5245, -8.8939],  // Setúbal Centro
  'SW-021': [38.9350, -9.3320],  // Mafra
  'SW-022': [38.9540, -8.9860],  // Vila Franca de Xira

  // === TRANSFORMER FAULTS ===
  'TRF-001': [38.7478, -9.1595],  // Hospital de Santa Maria
  'TRF-002': [38.8300, -9.1500],  // EPAL Loures
  'TRF-003': [38.6750, -9.1560],  // NephroCare Almada
  'TRF-004': [38.6800, -9.1570],  // Hospital Garcia de Orta
  'TRF-005': [38.7970, -9.3880],  // CPD Sintra
  'TRF-006': [38.7530, -9.2310],  // Hospital Fernando Fonseca
  'TRF-007': [38.5250, -8.8920],  // Bombeiros Setúbal

  // === CABLE FAULTS (eucaliptos sobre linhas MT) ===
  'CAB-001': [38.7977, -9.3878],  // Sintra Vila
  'CAB-002': [38.7890, -9.4510],  // Sintra Colares
  'CAB-003': [38.7500, -9.3700],  // Sintra São Marcos
  'CAB-004': [38.7250, -9.4200],  // Cascais Malveira
  'CAB-005': [38.7270, -9.3950],  // Cascais Alcabideche
  'CAB-006': [38.8070, -9.1210],  // Loures Camarate
  'CAB-007': [38.7940, -9.1010],  // Loures Moscavide
  'CAB-008': [38.7880, -9.1870],  // Odivelas Pontinha
  'CAB-009': [38.4440, -9.0980],  // Sesimbra
  'CAB-010': [38.4900, -8.9870],  // Arrábida Norte
  'CAB-011': [38.5100, -8.9610],  // Arrábida Sul
  'CAB-012': [38.5580, -8.9890],  // Setúbal Azeitão
  'CAB-013': [38.6470, -9.1730],  // Almada Charneca
  'CAB-014': [38.6350, -9.2340],  // Almada Costa Caparica
  'CAB-015': [38.6260, -9.0810],  // Seixal Aldeia de Paio Pires
  'CAB-016': [38.6460, -9.0420],  // Barreiro Lavradio
  'CAB-017': [38.9110, -9.0040],  // Vila Franca Alhandra
  'CAB-018': [38.9600, -9.3240],  // Mafra Malveira Serra
};

// Network topology — pares de IDs conectados por linhas MT
export const NETWORK_EDGES: [string, string][] = [
  // === Lisboa cidade (rede subterrânea em anel) ===
  ['TRF-001', 'SW-001'],
  ['TRF-001', 'SW-004'],
  ['SW-001', 'SW-002'],
  ['SW-001', 'SW-003'],
  ['SW-002', 'SW-005'],
  ['SW-003', 'SW-008'],
  ['SW-003', 'SW-009'],
  ['SW-004', 'SW-006'],
  ['SW-004', 'SW-005'],
  ['SW-005', 'SW-007'],

  // === Loures / Odivelas / Norte ===
  ['TRF-002', 'SW-007'],
  ['SW-006', 'CAB-008'],
  ['SW-007', 'CAB-006'],
  ['SW-007', 'CAB-007'],
  ['CAB-006', 'CAB-007'],
  ['CAB-007', 'SW-022'],
  ['CAB-008', 'SW-006'],

  // === Amadora / Sintra / Cascais ===
  ['TRF-006', 'SW-008'],
  ['TRF-005', 'CAB-001'],
  ['SW-008', 'SW-009'],
  ['SW-009', 'SW-010'],
  ['SW-010', 'SW-011'],
  ['SW-010', 'SW-012'],
  ['SW-011', 'SW-012'],
  ['SW-011', 'CAB-004'],
  ['SW-012', 'CAB-005'],
  ['CAB-001', 'CAB-002'],
  ['CAB-001', 'CAB-003'],
  ['CAB-002', 'CAB-004'],
  ['CAB-003', 'SW-021'],
  ['CAB-003', 'CAB-018'],
  ['CAB-004', 'CAB-005'],
  ['SW-021', 'CAB-018'],

  // === Almada / Seixal / Margem Sul ===
  ['TRF-003', 'SW-013'],
  ['TRF-004', 'SW-013'],
  ['SW-013', 'SW-014'],
  ['SW-013', 'CAB-013'],
  ['SW-013', 'CAB-014'],
  ['SW-014', 'SW-015'],
  ['SW-015', 'SW-016'],
  ['SW-015', 'CAB-015'],
  ['CAB-013', 'CAB-014'],
  ['CAB-014', 'SW-015'],

  // === Barreiro / Setúbal / Arrábida ===
  ['SW-016', 'CAB-016'],
  ['SW-016', 'SW-017'],
  ['SW-017', 'SW-018'],
  ['SW-018', 'SW-019'],
  ['SW-019', 'SW-020'],
  ['TRF-007', 'SW-020'],
  ['SW-020', 'CAB-012'],
  ['CAB-010', 'CAB-011'],
  ['CAB-011', 'CAB-009'],
  ['CAB-009', 'SW-018'],
  ['CAB-010', 'SW-019'],
  ['CAB-012', 'CAB-010'],

  // === Vila Franca / Norte AML ===
  ['SW-022', 'SW-007'],
  ['CAB-017', 'SW-022'],
  ['CAB-016', 'SW-017'],
];

export const MAP_CENTER: [number, number] = [38.72, -9.18];
export const MAP_ZOOM = 9;
