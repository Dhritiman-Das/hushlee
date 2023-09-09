import React, {
  useRef, ChangeEvent, useEffect, KeyboardEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { profileSetupActions } from '@/redux/features/profileSetup-slice';

function Setup2() {
  const setupData = useAppSelector((state) => state.profileSetup.value);
  const dpname = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const showdp = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      return event.target.files[0].name;
    }
    return '';
  };

  const removeDP = () => {
    dispatch(profileSetupActions.dpAdded(''));
  };

  const handleKeyRemoveDP = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      removeDP();
    }
  };

  useEffect(() => {
    if (setupData.dp === '') {
      if (dpname.current) {
        dpname.current.classList.add('hidden');
      }
    } else if (dpname.current) {
      dpname.current.classList.remove('hidden');
    }
  }, [setupData.dp]);

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        {/* ... Other Grid Items ... */}
        <Grid item xs={12}>
          <div className="flex items-center">
            <Button
              variant="outlined"
              component="label"
              color="secondary"
            >
              Profile Pic
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => dispatch(profileSetupActions.dpAdded(showdp(e)))}
              />
            </Button>
            <div
              className="ml-3 bg-background py-1 pl-4 flex items-center rounded-md hidden"
              ref={dpname}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyRemoveDP}
            >
              <div>{setupData.dp}</div>
              <div
                className="ml-2 mr-2 cursor-pointer hover:scale-110"
                onClick={removeDP}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyRemoveDP}
              >
                <RxCross2 />
              </div>
            </div>
          </div>
        </Grid>
        {/* ... Other Grid Items ... */}
      </Grid>
    </div>
  );
}

export default Setup2;
