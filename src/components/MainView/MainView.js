import React from 'react';

import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';

function TestPalette() {
  return <>
    <div style={{ display: 'flex', gap: '12px' }}>
      <Knowledge type={Knowledge.TYPE.BIOLOGY} />
      <Knowledge type={Knowledge.TYPE.CHEMISTRY} label="2" />
      <Knowledge type={Knowledge.TYPE.ENGINEERING} />
      <Knowledge type={Knowledge.TYPE.ARCANE} />
    </div>
    <div style={{ display: 'flex', gap: '12px'  }}>
      <Ingredient type={Ingredient.TYPE.CHECMICAL} />
      <Ingredient type={Ingredient.TYPE.ANIMAL} label="3" />
      <Ingredient type={Ingredient.TYPE.GEAR} />
      <Ingredient type={Ingredient.TYPE.BODY} />
    </div>
    <div style={{ display: 'flex', gap: '12px'  }}>
      <i class="fas fa-bars"></i>
      <i class="fas fa-cog"></i>
      <i class="fas fa-paw"></i>
      <i class="fas fa-male" style={{color: '#74C0FC'}}></i>
      <i class="fas fa-wine-bottle"></i>
      <i class="fas fa-atom"></i>
      <i class="fas fa-bolt"></i>
      <i class="fas fa-skull-crossbones"></i>
      <i class="fas fa-dizzy"></i>
      <i class="fas fa-skull"></i>
      <i class="fas fa-edit"></i>
      <i class="fas fa-copy"></i>
    </div>
  </>
}

export default function MainView() {
  return (
    <div>
      <div>MainView</div>
      <TestPalette />
    </div>
  );
}