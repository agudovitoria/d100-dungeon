import React from 'react';
import { Group } from 'react-konva';
import { COLORS, POSITIONS, SIZES } from './dungeons';
import { CyanDungeon } from './colors/CyanDungeon';
import { GreenDungeon } from './colors/GreenDungeon';
import { RedDungeon } from './colors/RedDungeon';
import { YellowDungeon } from './colors/YellowDungeon';
import { SmallDungeon } from './sizes/SmallDungeon';
import { LargeDungeon } from './sizes/LargeDungeon';
import { TopExitDungeon } from './exits/TopExitDungeon';
import { BottomExitDungeon } from './exits/BottomExitDungeon';
import { RightExitDungeon } from "./exits/RightExitDungeon";
import { LeftExitDungeon } from "./exits/LeftExitDungeon";
import { BottomDoorDungeon } from './doors/BottomDoorDungeon';
import { LeftDoorDungeon } from './doors/LeftDoorDungeon';
import { RightDoorDungeon } from './doors/RightDoorDungeon';
import { TopDoorDungeon } from './doors/TopDoorDungeon';

export const Dungeon = ({
  color = COLORS.RED,
  doors = [],
  exits = [],
  id,
  position,
  size = SIZES.SMALL
}) => {
  const ColorDungeon = (color) => {
    switch(color) {
      case COLORS.CYAN: {
        return <CyanDungeon position={position} />;
      }

      case COLORS.GREEN:  {
        return <GreenDungeon position={position} />;
      }

      case COLORS.YELLOW:  {
        return <YellowDungeon position={position} />;
      }
      
      default:  {
        return <RedDungeon position={position} />;
      }
    }
  };

  const SizeDungeon = (size) => {
    return size === SIZES.SMALL
    ? <SmallDungeon position={position} />
    : <LargeDungeon position={position} />
  };

  const ExitsDungeon = (exits) => (
    <Group key={`dungeon-${id}-${color}-exits-group`}>
    {
      exits.map((exit, index) => {
        if (exit === POSITIONS.BOTTOM) {
          return <BottomExitDungeon key={`exit-${index}`} position={position} />;
        }

        if (exit === POSITIONS.LEFT) {
          return <LeftExitDungeon key={`exit-${index}`} position={position} />;
        }

        if (exit === POSITIONS.RIGHT) {
          return <RightExitDungeon key={`exit-${index}`} position={position} />;
        }

        if (exit === POSITIONS.TOP) {
          return <TopExitDungeon key={`exit-${index}`} position={position} />;
        }

        return null;
      })
    }
    </Group>
  );

  const DoorsDungeon = (doors) => (
    <Group key={`dungeon-${id}-${color}-doors-group`}>
    {
      doors.map((door, index) => {
        if (door === POSITIONS.BOTTOM) {
          return <BottomDoorDungeon key={`door-${index}`} position={position} />;
        }

        if (door === POSITIONS.LEFT) {
          return <LeftDoorDungeon key={`door-${index}`} position={position} />;
        }

        if (door === POSITIONS.RIGHT) {
          return <RightDoorDungeon key={`door-${index}`} position={position} />;
        }

        if (door === POSITIONS.TOP) {
          return <TopDoorDungeon key={`door-${index}`} position={position} />;
        }

        return null;
      })
    }
    </Group>
  );

  return (
    <Group key={`dungeon-${id}-${color}-group`}>
      { ColorDungeon(color) }
      { SizeDungeon(size) }
      { ExitsDungeon(exits) }
      { DoorsDungeon(doors) }
    </Group>
  );
};