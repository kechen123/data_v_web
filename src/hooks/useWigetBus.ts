import React, { useEffect, useState } from 'react'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'

const useWidgetBus = (id: string, onChange: (data: WidgetObj) => void) => {
  const setWidgetMapBus = (data: WidgetObj) => {
    if (data.id !== id) return
    onChange(data)
  }
  useEffect(() => {
    eventBus.addListener('setWidgetMap', setWidgetMapBus)
    return () => {
      eventBus.removeListener('setWidgetMap', setWidgetMapBus)
    }
  }, [])
}

export default useWidgetBus
