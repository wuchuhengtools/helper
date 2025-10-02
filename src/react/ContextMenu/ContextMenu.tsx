import React, { ReactNode, useRef, useEffect, useState } from 'react';

/**
 * State interface for context menu positioning and visibility
 */
type ContextMenuState = {
  visible: boolean;
  x: number;
  y: number;
  browserId: number | null;
};

/**
 * Interface for calculated menu positioning with overflow adjustments
 */
type MenuPosition = {
  x: number;
  y: number;
};

/**
 * Custom hook for managing context menu state and interactions
 * Provides methods to show/hide context menu and track its state
 */
const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    visible: false,
    x: 0,
    y: 0,
    browserId: null,
  });

  /**
   * Shows the context menu at the mouse cursor position
   * @param e - Mouse event containing cursor coordinates
   * @param browserId - ID of the browser item being right-clicked
   */
  const showContextMenu = (e: React.MouseEvent, browserId: number) => {
    // 1. Input handling
    e.preventDefault();

    // 2. Core processing
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      browserId,
    });
  };

  /**
   * Hides the context menu by setting visible to false
   */
  const hideContextMenu = () => {
    // 2. Core processing
    setContextMenu(prev => ({ ...prev, visible: false }));
  };

  // 3. Output handling
  return {
    contextMenu,
    showContextMenu,
    hideContextMenu,
  };
};

/**
 * Configuration for a single context menu action
 */
export type ContextMenuAction = {
  label: string;
  onClick: (itemId: number) => void;
  className?: string;
};

/**
 * Props for the ContextMenu component
 */
type ContextMenuProps = {
  children: ReactNode;
  actions: ContextMenuAction[];
  onContextMenu?: (e: React.MouseEvent, itemId: number) => void;
  itemId: number;
};

/**
 * A reusable React context menu component that displays a custom menu on right-click.
 *
 * This component wraps its children and, when right-clicked, shows a context menu
 * with a list of actions. It handles menu positioning, click-outside detection,
 * and action execution.
 *
 * @param children - The React node(s) to wrap with context menu functionality.
 * @param actions - An array of actions to display in the context menu. Each action should have a `label` and an `onClick` handler.
 * @param onContextMenu - Optional callback invoked when the context menu is triggered.
 * @param itemId - The unique identifier for the item associated with this context menu instance.
 *
 * @example
 * ```tsx
 * <ContextMenu
 *   itemId={item.id}
 *   actions={[
 *     { label: 'Edit', onClick: (id) => editItem(id) },
 *     { label: 'Delete', onClick: (id) => deleteItem(id) }
 *   ]}
 * >
 *   <div>{item.name}</div>
 * </ContextMenu>
 * ```
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({ children, actions, onContextMenu, itemId }) => {
  const { contextMenu, showContextMenu, hideContextMenu } = useContextMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  /**
   * Calculates optimal menu position considering viewport boundaries
   * @param mouseX - Original mouse X coordinate
   * @param mouseY - Original mouse Y coordinate
   * @param menuElement - The menu DOM element to measure
   * @returns Adjusted position that fits within viewport
   */
  const calculateMenuPosition = (mouseX: number, mouseY: number, menuElement: HTMLDivElement): MenuPosition => {
    // 1. Input handling
    const menuRect = menuElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // 2. Core processing
    let adjustedX = mouseX;
    let adjustedY = mouseY;
    
    // 2.1 Check horizontal overflow and adjust
    if (mouseX + menuRect.width > viewportWidth) {
      adjustedX = mouseX - menuRect.width;
      // Ensure menu doesn't go off the left edge
      adjustedX = Math.max(0, adjustedX);
    }
    
    // 2.2 Check vertical overflow and adjust
    if (mouseY + menuRect.height > viewportHeight) {
      adjustedY = mouseY - menuRect.height;
      // Ensure menu doesn't go off the top edge
      adjustedY = Math.max(0, adjustedY);
    }
    
    // 3. Output handling
    return { x: adjustedX, y: adjustedY };
  };

  /**
   * Handles right-click events on the wrapped component
   * @param e - Mouse event from the right-click
   */
  const handleContextMenu = (e: React.MouseEvent) => {
    // 1. Input handling
    e.preventDefault();

    // 2. Core processing
    showContextMenu(e, itemId);
    onContextMenu?.(e, itemId);
  };

  /**
   * Executes a context menu action and closes the menu
   * @param action - The selected action to execute
   */
  const handleAction = (action: ContextMenuAction) => {
    // 1. Input handling
    if (contextMenu.browserId === null) return;

    // 2. Core processing
    action.onClick(contextMenu.browserId);
    hideContextMenu();
  };

  /**
   * Sets up click-outside detection and menu positioning adjustment
   */
  useEffect(() => {
    /**
     * Closes context menu when clicking outside of it
     * @param event - Mouse event from document click
     */
    const handleClickOutside = (event: MouseEvent) => {
      // 1. Input handling
      const target = event.target as Node;

      // 2. Core processing
      if (menuRef.current && !menuRef.current.contains(target)) {
        hideContextMenu();
      }
    };

    /**
     * Adjusts menu position after render to prevent viewport overflow
     */
    const adjustMenuPosition = () => {
      // 1. Input handling
      if (!menuRef.current || !contextMenu.visible) return;

      // 2. Core processing
      const adjustedPosition = calculateMenuPosition(contextMenu.x, contextMenu.y, menuRef.current);
      
      // 2.1 Apply adjusted position if different from original
      if (adjustedPosition.x !== contextMenu.x || adjustedPosition.y !== contextMenu.y) {
        menuRef.current.style.left = `${adjustedPosition.x}px`;
        menuRef.current.style.top = `${adjustedPosition.y}px`;
      }
    };

    // 2. Core processing - Add listener when menu is visible
    if (contextMenu.visible) {
      document.addEventListener('mousedown', handleClickOutside);
      // Adjust position after DOM update
      setTimeout(adjustMenuPosition, 0);
    }

    // 3. Output handling - Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenu.visible, contextMenu.x, contextMenu.y, hideContextMenu]);

  /**
   * Inline styles for the context menu container
   */
  const menuStyles: React.CSSProperties = {
    position: 'fixed',
    left: contextMenu.x,
    top: contextMenu.y,
    zIndex: 50,
    minWidth: '150px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    padding: '8px 0',
  };

  /**
   * Base inline styles for context menu items
   */
  const menuItemStyles: React.CSSProperties = {
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.15s ease-in-out',
    userSelect: 'none',
  };

  /**
   * Hover styles for menu items
   */
  const menuItemHoverStyles: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
  };

  // 3. Output handling
  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {contextMenu.visible && contextMenu.browserId === itemId && (
        <div ref={menuRef} style={menuStyles}>
          {actions.map((action, index)  => (
            <div
            key={index}
              style={menuItemStyles}
              onClick={() => handleAction(action)}
              onMouseEnter={e => {
                // 2. Core processing - Apply hover styles
                Object.assign(e.currentTarget.style, menuItemHoverStyles);
              }}
              onMouseLeave={e => {
                // 2. Core processing - Remove hover styles
                e.currentTarget.style.backgroundColor = '';
              }}
            >
              {action.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
