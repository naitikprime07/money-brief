import { AD_CONFIG } from '../../config/ads';
import { useGoogleAdManager } from '../../hooks/useGoogleAdManager';
import './AdSlot.css';

/**
 * Reusable display ad placement.
 *
 * <AdSlot placement="top" /> — below the header
 *
 * Space is reserved up front (no layout shift) while the ad request is in
 * flight. If no ad ever fills (empty/error/timeout) the whole block is
 * removed — no empty box or placeholder is shown.
 */
export default function AdSlot({ placement = 'content', refreshKey, className = '' }) {
  const config = AD_CONFIG.slots[placement];

  const { divId, status } = useGoogleAdManager({
    adUnitPath: config?.adUnitPath,
    sizes: config?.sizes,
    sizeMapping: config?.sizeMapping,
    targeting: { placement },
    refreshKey,
    enabled: Boolean(config),
  });

  if (!config || !AD_CONFIG.enabled || !config.adUnitPath) return null;

  // No ad coming — hide the placement entirely.
  if (status === 'empty' || status === 'error' || status === 'timeout') return null;

  const style = {
    '--ad-min-h-mobile': `${config.minHeight.mobile}px`,
    '--ad-min-h-desktop': `${config.minHeight.desktop}px`,
  };

  return (
    <aside className={`ad-slot ad-slot--${placement} ${className}`.trim()} aria-label="Advertisement">
      <span className="ad-slot__label">Advertisement</span>
      <div className="ad-slot__frame" style={style}>
        <div id={divId} className="ad-slot__unit" />
      </div>
    </aside>
  );
}
