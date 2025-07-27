import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router";

import * as styles from './TableauView.less';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import EditAssets from '../EditAssets';
import { AssetType } from '../../constants';
import Button from '../Button';

const KNOWLEDGE_CONFIG = {
  [AssetType.Knowledge]: { label: '' },
  [AssetType.Ingredient]: { hide: true },
  [AssetType.Detriment]: { hide: true },
  [AssetType.Experiment]: { hide: true }
};

const INGREDIENTS_CONFIG = {
  [AssetType.Knowledge]: { hide: true  },
  [AssetType.Ingredient]: { label: '' },
  [AssetType.Detriment]: { hide: true },
  [AssetType.Experiment]: { hide: true }
};

const EXPERIMENTS_CONFIG = {
  [AssetType.Knowledge]: { hide: true  },
  [AssetType.Ingredient]: { hide: true },
  [AssetType.Detriment]: { hide: true },
  [AssetType.Experiment]: { label: '' }
};

export default function TableauView() {
  const { dispatch, appState: { tableau: appState } } = useContext(AppContext);
  const navigate = useNavigate();

  const [journal, setJournal] = useState(appState?.journal);
  const [ingredients, setIngredients] = useState(appState?.ingredients);
  const [knowledge, setKnowledge] = useState(appState?.knowledge);
  const [experiments, setExperiments] = useState(appState?.experiments);
  
  function save() {
    dispatch({
      type: Actions.SET_TABLEAU,
      payload: {
        journal,
        ingredients,
        knowledge,
        experiments
      }
    });
    navigate('/');
  }
  
  return (
      <div className={styles.container}>
        <div className={styles.tableauTitle}>Tableau</div>
        <EditAssets
          label="Journal"
          assets={journal}
          onSubmit={setJournal}
          config={KNOWLEDGE_CONFIG}
        />
        <EditAssets
          label="Ingredients"
          assets={ingredients}
          onSubmit={setIngredients}
          config={INGREDIENTS_CONFIG}
        />
        <EditAssets
          label="Knowledge"
          assets={knowledge}
          onSubmit={setKnowledge}
          config={KNOWLEDGE_CONFIG}
        />
        <EditAssets
          label="Experiments"
          assets={experiments}
          onSubmit={setExperiments}
          config={EXPERIMENTS_CONFIG}
        />
        <div className={styles.buttons}>
          <Button type={Button.TYPE.PRIMARY} onClick={save}>Save</Button>
          <Button type={Button.TYPE.NEUTRAL} onClick={() => navigate('/')}>Cancel</Button>
        </div>
      </div>
    );
}