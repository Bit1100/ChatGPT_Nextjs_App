import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import {
  Sidebar,
  Brand,
  Menu,
  NavLink,
  Label,
  Span,
  Overlay,
} from "./sidebar.styles";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store";
import { sidebartoggle } from "@/store";
import { useRouter } from "next/router";
import sys_cnf from "@/system/config/config";

const SideBar = () => {
  const sys_config = sys_cnf();
  const router = useRouter();
  const [hovering, setHovering] = useState(false);
  const dispatch = useAppDispatch();
  const sidebarStatus = useAppSelector((state) => state.toggle.isOpen);

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => setHovering(false);

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/blog-intro",
      name: "Blog Intro",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/blog-body",
      name: "Blog Body",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/text-summarizer",
      name: "Text Summarizer",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/facebook-ad-title",
      name: "Facebook Ad Title",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/facebook-ad-text",
      name: "Facebook Ad Text",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/youtube-video-title",
      name: "Youtube Video Title",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/amazon-product-description",
      name: "Product Description",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/photo-post-caption",
      name: "Post Caption",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/pinterest-pin-title",
      name: "Pinterest Pin Title",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
    {
      path: "/ai-assistant/pinterest-description",
      name: "Pinterest Description",
      icon: MdSpaceDashboard,
      marginBottom: "1.5rem",
    },
  ];

  return (
    <Sidebar
      active={sidebarStatus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Overlay
        onClick={() => dispatch(sidebartoggle())}
        active={sidebarStatus}
      />
      <Brand onClick={() => router.push("/")}>
        <Image
          src={sys_config.site_config.shortLogo}
          alt="Brand Logo"
          width={70}
          height={70}
        />
        <Span hovered={hovering} active={sidebarStatus}>
          {sys_config.site_config.name}
        </Span>
      </Brand>
      <Menu>
        {menuItems.map((item) => {
          return (
            <NavLink
              key={item.name}
              hovered={hovering}
              active={sidebarStatus}
              style={{
                marginBottom: item.marginBottom ? item.marginBottom : "0",
              }}
            >
              <Link href={item.path}>
                <item.icon
                  color="#B5B5C3"
                  size={16}
                  style={{
                    marginBottom: "-2px",
                  }}
                />
                <Label hovered={hovering} active={sidebarStatus}>
                  {item.name}
                </Label>
              </Link>
            </NavLink>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
