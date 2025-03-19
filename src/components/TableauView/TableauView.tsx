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
  
  const [editingFields, setEditingFields] = useState<string[]>([]);

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

  function getOnEditStateChange(name: string) {
    return (isEditing: boolean) => {
      if (isEditing) {
        setEditingFields(Array.from(new Set(editingFields).add(name)));
      } else {
        setEditingFields(editingFields.filter(f => f !== name));
      }
    };
  }
  
  return (
      <div className={styles.container}>
        <div className={styles.tableauTitle}>Tableau</div>
        <EditAssets
          label="Journal"
          assets={journal}
          onSave={setJournal}
          onEditStateChange={getOnEditStateChange('journal')}
          config={KNOWLEDGE_CONFIG}
        />
        <EditAssets
          label="Ingredients"
          assets={ingredients}
          onSave={setIngredients}
          onEditStateChange={getOnEditStateChange('ingredients')}
          config={INGREDIENTS_CONFIG}
        />
        <EditAssets
          label="Knowledge"
          assets={knowledge}
          onSave={setKnowledge}
          onEditStateChange={getOnEditStateChange('knowledge')}
          config={KNOWLEDGE_CONFIG}
        />
        <EditAssets
          label="Experiments"
          assets={experiments}
          onSave={setExperiments}
          onEditStateChange={getOnEditStateChange('experiments')}
          config={EXPERIMENTS_CONFIG}
        />
        {!editingFields.length && (
          <div className={styles.buttons}>
            <Button type={Button.TYPE.PRIMARY} onClick={save}>Save</Button>
            <Button type={Button.TYPE.NEUTRAL} onClick={() => navigate('/')}>Cancel</Button>
          </div>
        )}
      </div>
    );
}