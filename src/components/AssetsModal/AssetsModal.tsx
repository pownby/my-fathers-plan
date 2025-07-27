import React, { useRef, useEffect, useContext } from 'react';

import { AssetsModalConfig } from '../../types';
import AssetsInput from '../AssetsInput';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import * as styles from './AssetsModal.less';

type AssetsModalProps = {
  config?: AssetsModalConfig
}

export default function AssetsModal({ config }: AssetsModalProps) {
  const dialogRef = useRef(null);
  const open = !!config;
  const { dispatch } = useContext(AppContext);

  function onClose() {
    dispatch({ type: Actions.CLOSE_ASSETS_MODAL });
  }

  useEffect(() => {
    if (open) {
      dialogRef?.current?.showModal();
    } else {
      dialogRef?.current?.close();
    }
    return () => dialogRef?.current?.close(); // used for dev mode rendering twice
  }, [open])

  return (
    <dialog ref={dialogRef} className={styles.dialog} onCancel={onClose}>
      {open && <AssetsInput onCancel={onClose} />}
    </dialog>
  );
}