import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router";

import * as styles from './TableauView.less';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import EditRewards from '../EditRewards';
import { RewardsType } from '../../constants';

const KNOWLEDGE_CONFIG = {
  [RewardsType.Knowledge]: { label: '' },
  [RewardsType.Ingredients]: { hide: true },
  [RewardsType.Others]: { hide: true } 
};

const INGREDIENTS_CONFIG = {
  [RewardsType.Knowledge]: { hide: true  },
  [RewardsType.Ingredients]: { label: '' },
  [RewardsType.Others]: { hide: true } 
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
        <EditRewards
          label="Journal"
          rewards={journal}
          onSave={setJournal}
          onEditStateChange={getOnEditStateChange('journal')}
          config={KNOWLEDGE_CONFIG}
        />
        <EditRewards
          label="Ingredients"
          rewards={ingredients}
          onSave={setIngredients}
          onEditStateChange={getOnEditStateChange('ingredients')}
          config={INGREDIENTS_CONFIG}
        />
        {!editingFields.length && (
          <div className={styles.buttons}>
            <button onClick={save}>Save</button>
            <button onClick={() => navigate('/')}>Cancel</button>
          </div>
        )}
      </div>
    );
}