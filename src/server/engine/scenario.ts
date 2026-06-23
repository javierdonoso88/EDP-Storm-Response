import { Fault, Crew, Inventory, ScenarioState, DroliusUnit } from './types';

export const BASE_SCENARIO: ScenarioState = {
  totalClients: 143000,
  inventory: {
    transformers: 2,
    cables: 40,
    mobileGenerators: 1,
  },
  drolius: {
    status: 'available',
  } as DroliusUnit,
  faults: [
    // === SWITCHABLE FAULTS (22) — rede subterrânea Lisboa / telecomando ===
    { id: 'SW-001', type: 'switchable', zone: 'Lisboa Baixa',            affectedClients: 4200, gridPos: { col: 4, row: 2 }, status: 'fault' },
    { id: 'SW-002', type: 'switchable', zone: 'Lisboa Alfama',           affectedClients: 2800, gridPos: { col: 5, row: 2 }, status: 'fault' },
    { id: 'SW-003', type: 'switchable', zone: 'Lisboa Benfica',          affectedClients: 3600, gridPos: { col: 3, row: 2 }, status: 'fault' },
    { id: 'SW-004', type: 'switchable', zone: 'Lisboa Lumiar',           affectedClients: 3100, gridPos: { col: 4, row: 1 }, status: 'fault' },
    { id: 'SW-005', type: 'switchable', zone: 'Lisboa Olivais',          affectedClients: 2700, gridPos: { col: 5, row: 1 }, status: 'fault' },
    { id: 'SW-006', type: 'switchable', zone: 'Odivelas Centro',         affectedClients: 3900, gridPos: { col: 3, row: 1 }, status: 'fault' },
    { id: 'SW-007', type: 'switchable', zone: 'Loures Sul',              affectedClients: 2200, gridPos: { col: 5, row: 0 }, status: 'fault' },
    { id: 'SW-008', type: 'switchable', zone: 'Amadora Centro',          affectedClients: 4100, gridPos: { col: 2, row: 1 }, status: 'fault' },
    { id: 'SW-009', type: 'switchable', zone: 'Amadora Venteira',        affectedClients: 2600, gridPos: { col: 2, row: 2 }, status: 'fault' },
    { id: 'SW-010', type: 'switchable', zone: 'Oeiras Centro',           affectedClients: 3300, gridPos: { col: 2, row: 3 }, status: 'fault' },
    { id: 'SW-011', type: 'switchable', zone: 'Cascais Centro',          affectedClients: 3800, gridPos: { col: 1, row: 3 }, status: 'fault' },
    { id: 'SW-012', type: 'switchable', zone: 'Cascais Estoril',         affectedClients: 2400, gridPos: { col: 1, row: 4 }, status: 'fault' },
    { id: 'SW-013', type: 'switchable', zone: 'Almada Centro',           affectedClients: 3700, gridPos: { col: 4, row: 4 }, status: 'fault' },
    { id: 'SW-014', type: 'switchable', zone: 'Almada Cacilhas',         affectedClients: 1900, gridPos: { col: 5, row: 4 }, status: 'fault' },
    { id: 'SW-015', type: 'switchable', zone: 'Seixal Centro',           affectedClients: 3200, gridPos: { col: 5, row: 5 }, status: 'fault' },
    { id: 'SW-016', type: 'switchable', zone: 'Barreiro Centro',         affectedClients: 2900, gridPos: { col: 6, row: 5 }, status: 'fault' },
    { id: 'SW-017', type: 'switchable', zone: 'Montijo',                 affectedClients: 2100, gridPos: { col: 7, row: 5 }, status: 'fault' },
    { id: 'SW-018', type: 'switchable', zone: 'Palmela',                 affectedClients: 1400, gridPos: { col: 7, row: 4 }, status: 'fault' },
    { id: 'SW-019', type: 'switchable', zone: 'Setúbal Norte',           affectedClients: 2800, gridPos: { col: 7, row: 3 }, status: 'fault' },
    { id: 'SW-020', type: 'switchable', zone: 'Setúbal Centro',          affectedClients: 3100, gridPos: { col: 7, row: 2 }, status: 'fault' },
    { id: 'SW-021', type: 'switchable', zone: 'Mafra',                   affectedClients: 1600, gridPos: { col: 1, row: 0 }, status: 'fault' },
    { id: 'SW-022', type: 'switchable', zone: 'Vila Franca de Xira',     affectedClients: 2700, gridPos: { col: 6, row: 1 }, status: 'fault' },

    // === TRANSFORMER FAULTS (7) — eucaliptos / ventos Sintra e Arrábida ===
    {
      id: 'TRF-001', type: 'transformer', zone: 'Hospital Santa Maria',
      affectedClients: 0, criticalSite: 'Hospital de Santa Maria', criticalSiteType: 'hospital',
      batteryMinutes: 240, gridPos: { col: 4, row: 0 }, status: 'fault',
    },
    {
      id: 'TRF-002', type: 'transformer', zone: 'EPAL Loures',
      affectedClients: 0, criticalSite: 'Estação de Bombagem EPAL — Loures', criticalSiteType: 'water',
      batteryMinutes: 30, gridPos: { col: 6, row: 0 }, status: 'fault',
    },
    {
      id: 'TRF-003', type: 'transformer', zone: 'NephroCare Almada',
      affectedClients: 0, criticalSite: 'NephroCare — Clínica de Hemodiálise Almada', criticalSiteType: 'dialysis',
      batteryMinutes: 60, gridPos: { col: 4, row: 5 }, status: 'fault',
    },
    {
      id: 'TRF-004', type: 'transformer', zone: 'Hospital Garcia de Orta',
      affectedClients: 0, criticalSite: 'Hospital Garcia de Orta — Almada', criticalSiteType: 'hospital',
      batteryMinutes: 120, gridPos: { col: 5, row: 3 }, status: 'fault',
    },
    {
      id: 'TRF-005', type: 'transformer', zone: 'CPD Sintra',
      affectedClients: 0, criticalSite: 'Data Center — Zona Industrial de Sintra', criticalSiteType: 'cpd',
      batteryMinutes: 480, gridPos: { col: 1, row: 2 }, status: 'fault',
    },
    {
      id: 'TRF-006', type: 'transformer', zone: 'Hospital Fernando Fonseca',
      affectedClients: 0, criticalSite: 'Hospital Fernando Fonseca — Amadora', criticalSiteType: 'hospital',
      batteryMinutes: 180, gridPos: { col: 2, row: 0 }, status: 'fault',
    },
    {
      id: 'TRF-007', type: 'transformer', zone: 'Bombeiros Setúbal',
      affectedClients: 0, criticalSite: 'Quartel Bombeiros Voluntários de Setúbal', criticalSiteType: 'emergency',
      batteryMinutes: 360, gridPos: { col: 7, row: 1 }, status: 'fault',
    },

    // === CABLE FAULTS (18) — eucaliptos sobre linhas MT em Sintra, Cascais, Arrábida ===
    { id: 'CAB-001', type: 'cable', zone: 'Sintra Vila',           affectedClients: 2600, gridPos: { col: 1, row: 1 }, status: 'fault' },
    { id: 'CAB-002', type: 'cable', zone: 'Sintra Colares',        affectedClients: 1800, gridPos: { col: 0, row: 1 }, status: 'fault' },
    { id: 'CAB-003', type: 'cable', zone: 'Sintra São Marcos',     affectedClients: 3400, gridPos: { col: 0, row: 2 }, status: 'fault' },
    { id: 'CAB-004', type: 'cable', zone: 'Cascais Malveira',      affectedClients: 1900, gridPos: { col: 0, row: 3 }, status: 'fault' },
    { id: 'CAB-005', type: 'cable', zone: 'Cascais Alcabideche',   affectedClients: 2700, gridPos: { col: 0, row: 4 }, status: 'fault' },
    { id: 'CAB-006', type: 'cable', zone: 'Loures Camarate',       affectedClients: 3800, gridPos: { col: 5, row: 0 - 1 }, status: 'fault' },
    { id: 'CAB-007', type: 'cable', zone: 'Loures Moscavide',      affectedClients: 2900, gridPos: { col: 6, row: 0 }, status: 'fault' },
    { id: 'CAB-008', type: 'cable', zone: 'Odivelas Pontinha',     affectedClients: 3100, gridPos: { col: 3, row: 0 }, status: 'fault' },
    { id: 'CAB-009', type: 'cable', zone: 'Sesimbra',              affectedClients: 2200, gridPos: { col: 6, row: 4 }, status: 'fault' },
    { id: 'CAB-010', type: 'cable', zone: 'Arrábida Norte',        affectedClients: 1600, gridPos: { col: 6, row: 3 }, status: 'fault' },
    { id: 'CAB-011', type: 'cable', zone: 'Arrábida Sul',          affectedClients: 1400, gridPos: { col: 6, row: 2 }, status: 'fault' },
    { id: 'CAB-012', type: 'cable', zone: 'Setúbal Azeitão',       affectedClients: 2100, gridPos: { col: 7, row: 0 }, status: 'fault' },
    { id: 'CAB-013', type: 'cable', zone: 'Almada Charneca',       affectedClients: 3500, gridPos: { col: 3, row: 5 }, status: 'fault' },
    { id: 'CAB-014', type: 'cable', zone: 'Almada Costa Caparica', affectedClients: 4200, gridPos: { col: 3, row: 4 }, status: 'fault' },
    { id: 'CAB-015', type: 'cable', zone: 'Seixal Aldeia de Paio Pires', affectedClients: 2800, gridPos: { col: 4, row: 3 }, status: 'fault' },
    { id: 'CAB-016', type: 'cable', zone: 'Barreiro Lavradio',     affectedClients: 3300, gridPos: { col: 6, row: 5 - 1 }, status: 'fault' },
    { id: 'CAB-017', type: 'cable', zone: 'Vila Franca Alhandra',  affectedClients: 2500, gridPos: { col: 7, row: 5 - 1 }, status: 'fault' },
    { id: 'CAB-018', type: 'cable', zone: 'Mafra Malveira Serra',  affectedClients: 1700, gridPos: { col: 0, row: 0 }, status: 'fault' },
  ],
  crews: [
    // BASE LISBOA / CHELAS (7 brigadas)
    { id: 'LIS-01', base: 'Lisboa/Chelas',  skills: ['A', 'B'],       status: 'available' },
    { id: 'LIS-02', base: 'Lisboa/Chelas',  skills: ['A', 'B'],       status: 'available' },
    { id: 'LIS-03', base: 'Lisboa/Chelas',  skills: ['B', 'C'],       status: 'available' },
    { id: 'LIS-04', base: 'Lisboa/Chelas',  skills: ['B'],            status: 'available' },
    { id: 'LIS-05', base: 'Lisboa/Chelas',  skills: ['B'],            status: 'available' },
    { id: 'LIS-06', base: 'Lisboa/Chelas',  skills: ['A', 'B', 'C'], status: 'available' },
    { id: 'LIS-07', base: 'Lisboa/Chelas',  skills: ['B', 'C'],       status: 'available' },
    // BASE SINTRA (4 brigadas)
    { id: 'SIN-01', base: 'Sintra',          skills: ['A', 'B'],       status: 'available' },
    { id: 'SIN-02', base: 'Sintra',          skills: ['B'],            status: 'available' },
    { id: 'SIN-03', base: 'Sintra',          skills: ['B'],            status: 'available' },
    { id: 'SIN-04', base: 'Sintra',          skills: ['A', 'B', 'C'], status: 'available' },
    // BASE CASCAIS (3 brigadas)
    { id: 'CAS-01', base: 'Cascais',         skills: ['A', 'B'],       status: 'available' },
    { id: 'CAS-02', base: 'Cascais',         skills: ['B'],            status: 'available' },
    { id: 'CAS-03', base: 'Cascais',         skills: ['B', 'C'],       status: 'available' },
    // BASE LOURES (2 brigadas)
    { id: 'LOU-01', base: 'Loures',          skills: ['A', 'B'],       status: 'available' },
    { id: 'LOU-02', base: 'Loures',          skills: ['B'],            status: 'available' },
    // BASE ALMADA (3 brigadas)
    { id: 'ALM-01', base: 'Almada',          skills: ['B', 'C'],       status: 'available' },
    { id: 'ALM-02', base: 'Almada',          skills: ['B'],            status: 'available' },
    { id: 'ALM-03', base: 'Almada',          skills: ['A', 'B'],       status: 'available' },
    // BASE SETÚBAL (3 brigadas)
    { id: 'SET-01', base: 'Setúbal',         skills: ['B', 'C'],       status: 'available' },
    { id: 'SET-02', base: 'Setúbal',         skills: ['B'],            status: 'available' },
    { id: 'SET-03', base: 'Setúbal',         skills: ['A', 'B'],       status: 'available' },
  ],
};

export function buildScenario(params: { availableCrews: number; switchableFaults: number; limitedParts: 0 | 1 }): ScenarioState {
  const state: ScenarioState = {
    ...BASE_SCENARIO,
    faults: BASE_SCENARIO.faults.map(f => ({ ...f, status: 'fault' as const })),
    crews: BASE_SCENARIO.crews.slice(0, params.availableCrews).map(c => ({ ...c, status: 'available' as const })),
    inventory: {
      ...BASE_SCENARIO.inventory,
      transformers: params.limitedParts === 1 ? 1 : 2,
    },
    drolius: { status: 'available' },
  };

  // Downgrade switchable faults to cable if below authorised SCADA threshold
  const switchableInScenario = state.faults.filter(f => f.type === 'switchable');
  const toDegrade = switchableInScenario.length - params.switchableFaults;
  if (toDegrade > 0) {
    let degraded = 0;
    for (const fault of state.faults) {
      if (fault.type === 'switchable' && degraded < toDegrade) {
        fault.type = 'cable';
        degraded++;
      }
    }
  }

  return state;
}
