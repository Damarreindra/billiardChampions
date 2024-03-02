import React from 'react';
import { useDispatch } from 'react-redux';
import { addGames } from '../../actions/playerAction';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex, Link, IconButton } from '@chakra-ui/react';
import { FaHome, FaPlus,} from 'react-icons/fa';
import { FaRankingStar } from "react-icons/fa6";


const BottomNavbar = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addGames({
        createdAt: Date.now()
      })
    );
  };

  return (
    <Flex
      as="nav"
      className="navbar navbar-expand-lg navbar-light bg-light sticky-bottom half-height-navbar"
      justify="center"
      align="center"
      style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}
    >
      <Flex className="container-fluid" justify="center" align="center">
        <Flex className="icons-container w-100" justify="space-between" px={5}>
          <Link as={RouterLink} to={'/leaderboard'}>
            <IconButton
              aria-label="Leaderboard"
              icon={<FaRankingStar />}
              variant="ghost"
              colorScheme="gray"
              borderRadius="full"
              fontSize="2xl"
              w={50}
              h={50}
            />
          </Link>

          <IconButton
            aria-label="Add Games"
            icon={<FaPlus />}
            colorScheme="orange"
            borderRadius="full"
            w={50}
            h={50}
            fontSize="2xl"
            bottom={5}
            onClick={handleSubmit}
          />

          <Link as={RouterLink} to={'/home'}>
            <IconButton
              aria-label="Home"
              icon={<FaHome />}
              variant="ghost"
              w={50}
              h={50}
              colorScheme="gray"
              borderRadius="full"
              fontSize="2xl"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BottomNavbar;
