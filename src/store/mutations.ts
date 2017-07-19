import { MutationTree } from 'vuex'
import { State } from './state'
import {
  ADD_MUSICS,
  SET_MUSIC,
  SET_THEME,
  SET_SPEED,
  SET_VOLUME,
  SET_COLLAPSED,
  SET_PLAY_MODE,
  SYNC_MEDIA
} from './types'

export const mutations = {
  [ADD_MUSICS]: (state: State, musics: Array<APlayer.Music>) => state.list = state.list.concat(musics),
  [SET_MUSIC]: (state: State, music: APlayer.Music) => state.music = music,
  [SET_THEME]: (state: State, theme: string) => state.theme = theme,
  [SET_SPEED]: (state: State, speed: number) => state.speed = speed,
  [SET_VOLUME]: (state: State, volume: number) => state.volume = volume,
  [SET_COLLAPSED]: (state: State, collapsed: boolean) => state.collapsed = collapsed,
  [SET_PLAY_MODE]: (state: State, mode: APlayer.PlayMode) => state.mode = mode,
  [SYNC_MEDIA]: (state: State, audio: HTMLAudioElement) => {
    Object.keys(state.media).forEach(key => {
      state.media[key] = audio[key]
    })
  }
} as MutationTree<State>