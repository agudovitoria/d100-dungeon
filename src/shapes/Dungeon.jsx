import React from 'react';
import uuid from 'react-uuid';
import { SIZE_LARGE } from '../config/sizeConstants';
import { Group } from 'react-konva';
import { ANGLES_BY_DIRECTION, COLORS, DIRECTIONS_BY_ANGLE, POSITIONS, SIZES } from './dungeons';
import { CyanDungeon } from './colors/CyanDungeon';
import { GreenDungeon } from './colors/GreenDungeon';
import { RedDungeon } from './colors/RedDungeon';
import { YellowDungeon } from './colors/YellowDungeon';
import { GreyDungeon } from './colors/GreyDungeon';
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
import { BottomArrow } from './arrows/BottomArrow';
import { LeftArrow } from './arrows/LeftArrow';
import { RightArrow } from './arrows/RightArrow';
import { TopArrow } from './arrows/TopArrow';

export const Dungeon = ({
  angle = 0,
  color = COLORS.RED,
  doors = [],
  exits = [],
  id,
  nextDungeonClick,
  position,
  size = SIZES.SMALL,
  ways = []
}) => {

  const ColorDungeon = (color) => {
    if (color === COLORS.CYAN) {
      return <CyanDungeon />;
    }

    if (color === COLORS.GREEN) {
      return <GreenDungeon />;
    }

    // First dungeon only
    if (color === COLORS.GREY) {
      return <GreyDungeon />;
    }

    if (color === COLORS.RED) {
      return <RedDungeon />;
    }

    if (color === COLORS.YELLOW) {
      return <YellowDungeon />;
    }

    return null;
  };

  const SizeDungeon = (size) => {
    return size === SIZES.SMALL
      ? <SmallDungeon position={position} />
      : <LargeDungeon position={position} />
  };

  const ExitsDungeon = (exits) => (
    <Group key={uuid()}>
      {
        exits.map((exit) => {
          if (exit === POSITIONS.BOTTOM) {
            return <BottomExitDungeon key={uuid()} />;
          }

          if (exit === POSITIONS.LEFT) {
            return <LeftExitDungeon key={uuid()} />;
          }

          if (exit === POSITIONS.RIGHT) {
            return <RightExitDungeon key={uuid()} />;
          }

          if (exit === POSITIONS.TOP) {
            return <TopExitDungeon key={uuid()} />;
          }

          return null;
        })
      }
    </Group>
  );

  const DoorsDungeon = (doors) => (
    <Group key={`dungeon-${id}-${color}`}>
      {
        doors.map((door) => {
          if (door === POSITIONS.BOTTOM) {
            return <BottomDoorDungeon key={uuid()} />;
          }

          if (door === POSITIONS.LEFT) {
            return <LeftDoorDungeon key={uuid()} />;
          }

          if (door === POSITIONS.RIGHT) {
            return <RightDoorDungeon key={uuid()} />;
          }

          if (door === POSITIONS.TOP) {
            return <TopDoorDungeon key={uuid()} />;
          }

          return null;
        })
      }
    </Group>
  );

  const WaysDungeon = (ways) => (
    <Group key={`dungeon-${id}-${color}-ways`}>
      {
        ways.map((way) => {
          const getRealDirectionByAngle = (direction) => {
            const angleByDirection = ANGLES_BY_DIRECTION[direction];
            const realAngle = ((angleByDirection + angle) % 360);
            return DIRECTIONS_BY_ANGLE[realAngle]
          };

          const props = {
            arrowClicked: (id, direction) => nextDungeonClick(id, getRealDirectionByAngle(direction)),
            id,
            key: uuid()
          };

          if (way === POSITIONS.BOTTOM) {
            return (<BottomArrow {...props} />);
          }
          
          if (way === POSITIONS.LEFT) {
            return (<LeftArrow {...props} />);
          }

          if (way === POSITIONS.RIGHT) {
            return (<RightArrow {...props} />);
          }

          if (way === POSITIONS.TOP) {
            return (<TopArrow {...props} />);
          }

          return null;
        })
      }
    </Group>
  );

  return (
    <Group
      height={SIZE_LARGE.height}
      key={uuid()}
      offset={{
        x: SIZE_LARGE.width / 2,
        y: SIZE_LARGE.height / 2,
      }}
      position={position}
      rotation={angle}
      width={SIZE_LARGE.width}
    >
      {ColorDungeon(color)}
      {ExitsDungeon(exits)}
      {SizeDungeon(size)}
      {DoorsDungeon(doors)}
      {WaysDungeon(ways)}
    </Group>
  );
};