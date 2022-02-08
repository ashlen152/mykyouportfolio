import useEventListener from './useEventListener'

export default function useClickOutsideWith2Ref(ref, ref2, cb) {
  useEventListener(
    'click',
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      if (ref2.current == null || ref2.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
