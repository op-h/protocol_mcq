const lectures = [
  {
    id: "lec1",
    title: "Network Architecture",
    label: "Lecture 1",
    questions: [
      {
        text: "What is meant by network architecture?",
        answers: [
          "A set of physical devices in a network",
          "A set of layers and protocols",
          "A collection of routers and switches",
          "A type of network topology",
          "A communication medium"
        ],
        correct: 1
      },
      {
        text: "Why are networks organized into layers?",
        answers: [
          "To increase hardware cost",
          "To reduce design complexity",
          "To eliminate protocols",
          "To increase transmission speed only",
          "To avoid using interfaces"
        ],
        correct: 1
      },
      {
        text: "What does a network protocol define?",
        answers: [
          "Hardware specifications only",
          "Rules for communication between devices",
          "Only encryption methods",
          "Only routing paths",
          "Only data storage rules"
        ],
        correct: 1
      },
      {
        text: "Which of the following is part of the protocol process?",
        answers: [
          "Hardware installation",
          "Message format structure",
          "Device manufacturing",
          "Cable installation",
          "Power consumption"
        ],
        correct: 1
      },
      {
        text: "Which model is mentioned for network layering?",
        answers: ["HTTP Model", "FTP Model", "OSI Model", "SMTP Model", "DNS Model"],
        correct: 2
      },
      {
        text: "What is one benefit of a layered model?",
        answers: [
          "Increases complexity",
          "Makes communication harder",
          "Breaks communication into smaller parts",
          "Eliminates protocols",
          "Reduces compatibility"
        ],
        correct: 2
      },
      {
        text: "How many layers are in the OSI model?",
        answers: ["4", "5", "6", "7", "8"],
        correct: 3
      },
      {
        text: "Which organization developed the OSI model?",
        answers: ["IEEE", "ISO", "DoD", "ITU", "ANSI"],
        correct: 1
      },
      {
        text: "What is the main function of the Physical layer?",
        answers: [
          "Routing packets",
          "Error handling",
          "Transmitting bits over medium",
          "Data encryption",
          "Session management"
        ],
        correct: 2
      },
      {
        text: "Which device operates at the Physical layer?",
        answers: ["Router", "Switch", "Repeater", "Gateway", "Bridge"],
        correct: 2
      },
      {
        text: "What does the Data Link layer handle?",
        answers: [
          "End-to-end delivery",
          "Node-to-node delivery",
          "Application services",
          "Data encryption",
          "Session control"
        ],
        correct: 1
      },
      {
        text: "What type of addressing is used in the Data Link layer?",
        answers: [
          "Logical addressing",
          "Port addressing",
          "Physical (MAC) addressing",
          "IP addressing",
          "URL addressing"
        ],
        correct: 2
      },
      {
        text: "What is the primary role of the Network layer?",
        answers: ["Compression", "Routing packets", "Session control", "Encryption", "Data formatting"],
        correct: 1
      },
      {
        text: "Which protocol belongs to the Transport layer?",
        answers: ["IP", "TCP", "HTTP", "FTP", "SNMP"],
        correct: 1
      },
      {
        text: "What type of delivery does the Transport layer provide?",
        answers: ["Node-to-node", "End-to-end", "Device-to-device", "LAN-to-LAN", "Bit-to-bit"],
        correct: 1
      },
      {
        text: "What is the function of the Session layer?",
        answers: [
          "Routing",
          "Data encryption",
          "Establishing sessions between users",
          "Physical transmission",
          "Addressing"
        ],
        correct: 2
      },
      {
        text: "Which layer is responsible for data encryption?",
        answers: ["Network", "Transport", "Session", "Presentation", "Data Link"],
        correct: 3
      },
      {
        text: "Which protocols are part of the Application layer?",
        answers: ["TCP and UDP", "IP and ARP", "HTTP and FTP", "MAC and LLC", "ICMP and IGMP"],
        correct: 2
      },
      {
        text: "What does PDU stand for in networking?",
        answers: [
          "Protocol Data Unit",
          "Packet Delivery Unit",
          "Physical Data Utility",
          "Process Data Unit",
          "Protocol Device Utility"
        ],
        correct: 0
      },
      {
        text: "In data encapsulation, what does the Network layer create?",
        answers: ["Frames", "Bits", "Segments", "Packets", "Signals"],
        correct: 3
      },
      {
        text: "How many layers are in the TCP/IP model?",
        answers: ["3", "4", "5", "6", "7"],
        correct: 1
      },
      {
        text: "Which TCP/IP layer corresponds to OSI Transport layer?",
        answers: ["Application", "Internet", "Network Access", "Transport", "Session"],
        correct: 3
      },
      {
        text: "What type of network covers a city?",
        answers: ["LAN", "WAN", "MAN", "PAN", "SAN"],
        correct: 2
      },
      {
        text: "What is a WAN primarily used for?",
        answers: [
          "Small office communication",
          "Campus networking",
          "Long-distance communication",
          "Home networking",
          "Device pairing"
        ],
        correct: 2
      },
      {
        text: "What is the function of a router?",
        answers: [
          "Regenerate signals",
          "Filter frames",
          "Forward packets based on Layer 3 addresses",
          "Broadcast data to all ports",
          "Convert protocols only"
        ],
        correct: 2
      }
    ]
  },
  {
    id: "lec2",
    title: "IPv4 and IPv6 Addressing",
    label: "Lecture 2",
    questions: [
      {
        text: "At which layer does communication occur from source to destination across the Internet?",
        answers: ["Physical layer", "Data Link layer", "Network layer", "Transport layer", "Application layer"],
        correct: 2
      },
      {
        text: "What is the size of an IPv4 address?",
        answers: ["16 bits", "32 bits", "64 bits", "128 bits", "256 bits"],
        correct: 1
      },
      {
        text: "What is a datagram in IPv4?",
        answers: [
          "A fixed-length packet",
          "A routing table",
          "A variable-length packet with header and data",
          "A physical signal",
          "A MAC address"
        ],
        correct: 2
      },
      {
        text: "What is the minimum size of an IPv4 header?",
        answers: ["10 bytes", "20 bytes", "32 bytes", "40 bytes", "60 bytes"],
        correct: 1
      },
      {
        text: "Which field identifies the IP version in IPv4?",
        answers: ["TTL", "Protocol", "Version", "Header Length", "Flags"],
        correct: 2
      },
      {
        text: "What does TTL stand for in IPv4?",
        answers: [
          "Total Transmission Length",
          "Time to Live",
          "Transfer Time Limit",
          "Transmission Type Level",
          "Traffic Transfer Load"
        ],
        correct: 1
      },
      {
        text: "Which IPv4 field is used for error checking of the header?",
        answers: ["Protocol", "Identification", "Header Checksum", "Flags", "Offset"],
        correct: 2
      },
      {
        text: "Which addressing method divides IPv4 into classes A, B, C, D, and E?",
        answers: [
          "Classless addressing",
          "Dynamic addressing",
          "Classful addressing",
          "Logical addressing",
          "Physical addressing"
        ],
        correct: 2
      },
      {
        text: "What is the maximum size of an IPv4 datagram?",
        answers: ["1024 bytes", "4096 bytes", "32768 bytes", "65535 bytes", "131072 bytes"],
        correct: 3
      },
      {
        text: "Which field specifies the next-level protocol in IPv4?",
        answers: ["TTL", "Protocol", "Flags", "Offset", "Version"],
        correct: 1
      },
      {
        text: "What is the purpose of the Identification field in IPv4?",
        answers: ["Encryption", "Routing", "Fragment identification", "Address mapping", "Error correction"],
        correct: 2
      },
      {
        text: "Which of the following is a private IPv4 address range?",
        answers: [
          "8.0.0.0 - 8.255.255.255",
          "100.0.0.0 - 100.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "200.0.0.0 - 200.255.255.255",
          "224.0.0.0 - 224.255.255.255"
        ],
        correct: 2
      },
      {
        text: "What problem did classful addressing create?",
        answers: ["Too many routers", "Excessive delay", "Wasting IP addresses", "Poor encryption", "Low bandwidth"],
        correct: 2
      },
      {
        text: "What is the purpose of subnetting?",
        answers: [
          "Increase physical connections",
          "Divide a large network into smaller networks",
          "Encrypt data",
          "Improve signal strength",
          "Eliminate routing"
        ],
        correct: 1
      },
      {
        text: "What happens when one host bit is borrowed in subnetting?",
        answers: ["Hosts double", "Subnets double", "Addresses are lost", "Routing stops", "TTL increases"],
        correct: 1
      },
      {
        text: "What does VLSM stand for?",
        answers: [
          "Variable Length Subnet Mask",
          "Virtual LAN System Model",
          "Verified Logical Subnet Method",
          "Variable Link Switching Method",
          "Virtual Layer Security Mechanism"
        ],
        correct: 0
      },
      {
        text: "What is the main function of NAT?",
        answers: [
          "Encrypt packets",
          "Translate domain names",
          "Map internal addresses to external addresses",
          "Increase bandwidth",
          "Control routing protocols"
        ],
        correct: 2
      },
      {
        text: "What is port forwarding used for?",
        answers: [
          "Increasing packet size",
          "Redirecting communication requests",
          "Encrypting ports",
          "Blocking traffic",
          "Compressing data"
        ],
        correct: 1
      },
      {
        text: "What is the size of an IPv6 address?",
        answers: ["32 bits", "64 bits", "96 bits", "128 bits", "256 bits"],
        correct: 3
      },
      {
        text: "How many hexadecimal digits are in an IPv6 address?",
        answers: ["16", "24", "32", "48", "64"],
        correct: 2
      },
      {
        text: "Which IPv6 feature eliminates the need for NAT?",
        answers: [
          "Smaller headers",
          "Multicast",
          "Globally unique addresses",
          "Stateless configuration",
          "QoS support"
        ],
        correct: 2
      },
      {
        text: "What does the double colon (::) represent in IPv6?",
        answers: [
          "Separator between fields",
          "Compression of successive zeros",
          "Encryption indicator",
          "Broadcast address",
          "Routing prefix"
        ],
        correct: 1
      },
      {
        text: "Which IPv6 address type delivers packets to the most reachable member of a group?",
        answers: ["Unicast", "Broadcast", "Multicast", "Anycast", "Hybridcast"],
        correct: 3
      },
      {
        text: "What is the last 64 bits of an IPv6 address called?",
        answers: ["Global prefix", "Subnet ID", "Interface identifier", "Network ID", "Routing ID"],
        correct: 2
      },
      {
        text: "Which transition technique allows IPv4 and IPv6 to run simultaneously?",
        answers: ["Tunneling", "Header translation", "Dual stack", "NAT", "Fragmentation"],
        correct: 2
      }
    ]
  },
  {
    id: "lec3",
    title: "ICMP, DHCP, IPSec and Forwarding",
    label: "Lecture 3",
    questions: [
      {
        text: "What is the main purpose of ICMP?",
        answers: [
          "Encrypt data packets",
          "Provide routing paths",
          "Compensate for IP deficiencies",
          "Assign IP addresses",
          "Compress data"
        ],
        correct: 2
      },
      {
        text: "ICMP is classified under which layer?",
        answers: ["Physical layer", "Data Link layer", "Network layer", "Transport layer", "Application layer"],
        correct: 2
      },
      {
        text: "How are ICMP messages transmitted?",
        answers: [
          "Directly to the data link layer",
          "Through TCP segments",
          "Encapsulated inside IP datagrams",
          "Using UDP packets",
          "Via application protocols"
        ],
        correct: 2
      },
      {
        text: "Which of the following is a type of ICMP message?",
        answers: [
          "Routing message",
          "Error reporting message",
          "Encryption message",
          "Authentication message",
          "Fragmentation message"
        ],
        correct: 1
      },
      {
        text: "What does the Ping application use?",
        answers: ["TCP", "UDP", "ICMP Echo Request/Reply", "DHCP", "IPSec"],
        correct: 2
      },
      {
        text: "What does Ping check?",
        answers: ["Network speed", "Host availability", "Encryption level", "Packet size", "IP class"],
        correct: 1
      },
      {
        text: "What is the function of Traceroute?",
        answers: [
          "Assign IP addresses",
          "Encrypt packets",
          "Record the route to a destination",
          "Compress data",
          "Block traffic"
        ],
        correct: 2
      },
      {
        text: "What does DHCP stand for?",
        answers: [
          "Dynamic Host Communication Protocol",
          "Data Handling Control Protocol",
          "Dynamic Host Configuration Protocol",
          "Distributed Host Control Protocol",
          "Data Host Configuration Process"
        ],
        correct: 2
      },
      {
        text: "What is the main goal of DHCP?",
        answers: [
          "Encrypt IP packets",
          "Assign IP addresses dynamically",
          "Control routing tables",
          "Filter network traffic",
          "Provide error correction"
        ],
        correct: 1
      },
      {
        text: "What is the first message sent by a host in DHCP?",
        answers: ["DHCP request", "DHCP ack", "DHCP discover", "DHCP offer", "DHCP reply"],
        correct: 2
      },
      {
        text: "What message does the server send after DHCP discover?",
        answers: ["DHCP ack", "DHCP request", "DHCP offer", "DHCP confirm", "DHCP response"],
        correct: 2
      },
      {
        text: "Why is a relay agent needed in DHCP?",
        answers: [
          "To encrypt messages",
          "To compress packets",
          "Because broadcast cannot pass routers",
          "To assign MAC addresses",
          "To speed up transmission"
        ],
        correct: 2
      },
      {
        text: "What additional information can DHCP provide besides IP address?",
        answers: ["Encryption keys", "MAC address", "DNS server address", "Packet size", "Routing protocol"],
        correct: 2
      },
      {
        text: "What is IPSec?",
        answers: [
          "A routing protocol",
          "A transport protocol",
          "A collection of security protocols",
          "A switching method",
          "A subnetting technique"
        ],
        correct: 2
      },
      {
        text: "Which organization designed IPSec?",
        answers: ["ISO", "IEEE", "IETF", "ITU", "ANSI"],
        correct: 2
      },
      {
        text: "What does IPSec provide?",
        answers: [
          "Packet compression",
          "Authentication and confidentiality",
          "Routing optimization",
          "Address translation",
          "Packet fragmentation"
        ],
        correct: 1
      },
      {
        text: "In which mode does IPSec NOT protect the IP header?",
        answers: ["Tunnel mode", "Transport mode", "Hybrid mode", "Secure mode", "Relay mode"],
        correct: 1
      },
      {
        text: "Which IPSec mode protects the original IP header?",
        answers: ["Transport mode", "Hybrid mode", "Tunnel mode", "Secure mode", "Relay mode"],
        correct: 2
      },
      {
        text: "What is packet forwarding?",
        answers: [
          "Encrypting packets",
          "Assigning IP addresses",
          "Moving packets between interfaces",
          "Compressing data",
          "Blocking traffic"
        ],
        correct: 2
      },
      {
        text: "What happens if TTL reaches zero during forwarding?",
        answers: [
          "Packet is encrypted",
          "Packet is forwarded",
          "Packet is discarded",
          "Packet is compressed",
          "Packet is duplicated"
        ],
        correct: 2
      },
      {
        text: "What lookup method is used in forwarding tables?",
        answers: ["Shortest Path Match", "Longest Prefix Match", "Fast Route Match", "Exact Match", "Binary Match"],
        correct: 1
      },
      {
        text: "What is Process Switching?",
        answers: [
          "Hardware-based forwarding",
          "CPU processes every packet",
          "Cached forwarding",
          "Precomputed routing",
          "Software-defined routing"
        ],
        correct: 1
      },
      {
        text: "What is Fast Switching based on?",
        answers: [
          "Processing all packets individually",
          "Ignoring routing tables",
          "Caching the first packet's result",
          "Using only hardware",
          "Encrypting packets"
        ],
        correct: 2
      },
      {
        text: "What does CEF stand for?",
        answers: [
          "Centralized Efficient Forwarding",
          "Cisco Express Forwarding",
          "Controlled Ethernet Forwarding",
          "Core Enhanced Forwarding",
          "Cached Express Flow"
        ],
        correct: 1
      },
      {
        text: "What is a key feature of SDN?",
        answers: [
          "Combines control and data planes",
          "Removes routers",
          "Separates control and data planes",
          "Uses only hardware control",
          "Eliminates switching"
        ],
        correct: 2
      }
    ]
  },
  {
    id: "lec4",
    title: "Routing",
    label: "Lecture 4",
    questions: [
      {
        text: "What is routing?",
        answers: [
          "Encrypting packets",
          "Forwarding packets between networks using best path",
          "Compressing data",
          "Blocking traffic",
          "Monitoring bandwidth"
        ],
        correct: 1
      },
      {
        text: "What does a routing table contain?",
        answers: [
          "All possible paths",
          "Only longest paths",
          "Only best routes for each destination",
          "Random paths",
          "Security keys"
        ],
        correct: 2
      },
      {
        text: "Static routing is configured by whom?",
        answers: ["End user", "Router automatically", "Administrator manually", "ISP only", "Software vendor"],
        correct: 2
      },
      {
        text: "Static routing is typically used in:",
        answers: ["Large networks", "Medium networks", "Small organizations", "Cloud systems", "Wireless systems"],
        correct: 2
      },
      {
        text: "Dynamic routing means:",
        answers: ["Manual updates", "Automatic routing updates", "No routing", "Static paths", "Fixed topology"],
        correct: 1
      },
      {
        text: "Dynamic routing learns paths via:",
        answers: ["User input", "Manual tables", "Periodic updates from routers", "DNS", "Firewalls"],
        correct: 2
      },
      {
        text: "Dynamic routing selects:",
        answers: ["Longest path", "Random path", "Shortest/best path", "Static path", "Encrypted path"],
        correct: 2
      },
      {
        text: "Static routing is considered:",
        answers: ["Slow and insecure", "Secure and fast", "Dynamic and slow", "Complex and unsafe", "Unreliable"],
        correct: 1
      },
      {
        text: "One advantage of dynamic routing is:",
        answers: [
          "Requires manual setup",
          "No topology updates",
          "Automatically updates topology changes",
          "Less scalable",
          "Needs fewer routers"
        ],
        correct: 2
      },
      {
        text: "Dynamic routing reduces:",
        answers: ["Security", "Administrative work", "Packet size", "Latency only", "Bandwidth"],
        correct: 1
      },
      {
        text: "Static routing requires:",
        answers: ["No destination info", "Destination network ID", "Encryption key", "MAC address only", "DNS records"],
        correct: 1
      },
      {
        text: "Dynamic routing is suitable for:",
        answers: ["Small networks only", "Large organizations", "Single router setups", "Offline systems", "Standalone PCs"],
        correct: 1
      },
      {
        text: "Routing protocols are used in:",
        answers: ["Static routing", "Dynamic routing", "Encryption", "Compression", "Switching only"],
        correct: 1
      },
      {
        text: "Which routing type needs periodic updates?",
        answers: ["Static", "Manual", "Dynamic", "Hybrid", "Offline"],
        correct: 2
      },
      {
        text: "Static routing is best for networks with:",
        answers: ["100+ routers", "50 routers", "10-15 routers", "Unlimited routers", "No routers"],
        correct: 2
      },
      {
        text: "What is the main function of routing?",
        answers: ["Encrypt data", "Store data", "Forward packets across networks", "Filter packets", "Analyze traffic"],
        correct: 2
      },
      {
        text: "Dynamic routing eliminates the need to:",
        answers: [
          "Monitor traffic",
          "Know destination networks manually",
          "Use routers",
          "Configure IP",
          "Maintain hardware"
        ],
        correct: 1
      },
      {
        text: "Which routing type is more scalable?",
        answers: ["Static", "Manual", "Dynamic", "Fixed", "None"],
        correct: 2
      },
      {
        text: "Static routing lacks:",
        answers: ["Security", "Speed", "Automatic updates", "Simplicity", "Control"],
        correct: 2
      },
      {
        text: "Routing tables are used to:",
        answers: ["Store passwords", "Choose best path", "Encrypt packets", "Block traffic", "Detect viruses"],
        correct: 1
      },
      {
        text: "Dynamic routing depends on:",
        answers: [
          "Manual entries",
          "Periodic router communication",
          "Fixed topology",
          "No updates",
          "Static paths"
        ],
        correct: 1
      },
      {
        text: "One disadvantage of static routing is:",
        answers: ["High automation", "Requires manual updates", "Low security", "High cost", "Complex protocols"],
        correct: 1
      },
      {
        text: "Which routing type adapts to topology changes?",
        answers: ["Static", "Fixed", "Dynamic", "Manual", "Local"],
        correct: 2
      },
      {
        text: "Static routing is NOT ideal for:",
        answers: [
          "Small networks",
          "Simple setups",
          "Large dynamic networks",
          "Secure systems",
          "Controlled environments"
        ],
        correct: 2
      },
      {
        text: "Dynamic routing protocols help routers:",
        answers: ["Encrypt data", "Learn network paths automatically", "Store files", "Reduce hardware", "Assign IPs"],
        correct: 1
      }
    ]
  },
  {
    id: "lec5",
    title: "Transport and Application Layer Protocols",
    label: "Lecture 5",
    questions: [
      {
        text: "What is the main role of the transport layer?",
        answers: [
          "Routing packets between networks",
          "Providing logical communication between processes",
          "Assigning IP addresses",
          "Encrypting data",
          "Managing hardware"
        ],
        correct: 1
      },
      {
        text: "Which of the following is a function of the transport layer?",
        answers: ["DNS resolution", "Segmentation of data", "URL formatting", "File storage", "Packet filtering"],
        correct: 1
      },
      {
        text: "Which organization assigns well-known port numbers?",
        answers: ["IEEE", "ISO", "IANA", "ITU", "ANSI"],
        correct: 2
      },
      {
        text: "What is the range of well-known ports?",
        answers: ["1024-49151", "49152-65535", "0-1023", "1000-2000", "2000-3000"],
        correct: 2
      },
      {
        text: "Which protocol is connectionless?",
        answers: ["TCP", "SCTP", "UDP", "HTTP", "FTP"],
        correct: 2
      },
      {
        text: "UDP is considered:",
        answers: [
          "Reliable and slow",
          "Unreliable but fast",
          "Secure and complex",
          "Stateful",
          "Connection-oriented"
        ],
        correct: 1
      },
      {
        text: "Which protocol provides reliable delivery?",
        answers: ["UDP", "DNS", "TCP", "HTTP", "SNMP"],
        correct: 2
      },
      {
        text: "Which port does HTTP use?",
        answers: ["21", "23", "25", "80", "110"],
        correct: 3
      },
      {
        text: "What type of communication does the transport layer provide?",
        answers: ["Host-to-host", "Process-to-process", "Router-to-router", "Network-to-network", "Device-to-device"],
        correct: 1
      },
      {
        text: "What is the range of registered ports?",
        answers: ["0-1023", "1024-49151", "49152-65535", "1-65535", "2000-6000"],
        correct: 1
      },
      {
        text: "Which of the following is NOT a feature of UDP?",
        answers: [
          "No connection establishment",
          "No flow control",
          "Acknowledgment mechanism",
          "Small header size",
          "No congestion control"
        ],
        correct: 2
      },
      {
        text: "Which applications commonly use UDP?",
        answers: ["HTTP and FTP", "Telnet and SMTP", "DNS and RIP", "FTP and POP3", "HTTP and DNS"],
        correct: 2
      },
      {
        text: "TCP ensures:",
        answers: [
          "Packet loss",
          "Out-of-order delivery",
          "Reliable, in-order delivery",
          "No sequencing",
          "No acknowledgment"
        ],
        correct: 2
      },
      {
        text: "Which of the following uses TCP?",
        answers: ["RIP", "DNS only", "HTTP", "SNMP", "DHCP"],
        correct: 2
      },
      {
        text: "SCTP combines features of:",
        answers: ["HTTP and FTP", "UDP and TCP", "DNS and DHCP", "SMTP and POP3", "Telnet and SSH"],
        correct: 1
      },
      {
        text: "What is the main function of the application layer?",
        answers: [
          "Data segmentation",
          "Interface for user interaction with network",
          "Packet routing",
          "Error detection",
          "Flow control"
        ],
        correct: 1
      },
      {
        text: "What does DNS do?",
        answers: [
          "Transfers files",
          "Assigns IP addresses dynamically",
          "Matches domain names with IP addresses",
          "Sends emails",
          "Encrypts data"
        ],
        correct: 2
      },
      {
        text: "Why is UDP considered faster than TCP?",
        answers: [
          "Uses encryption",
          "Has connection setup",
          "Minimal overhead and no congestion control",
          "Uses acknowledgments",
          "Requires sequencing"
        ],
        correct: 2
      },
      {
        text: "Which statement best describes HTTP?",
        answers: [
          "Stateful protocol",
          "Connectionless protocol",
          "Stateless protocol",
          "Transport protocol",
          "Encryption protocol"
        ],
        correct: 2
      },
      {
        text: "What is required for accessing a web page?",
        answers: ["Only IP address", "Only file name", "URL (address and file name)", "Only DNS", "Only browser"],
        correct: 2
      },
      {
        text: "Which step occurs first when accessing a website?",
        answers: ["Server sends HTML", "DNS resolution", "Browser renders page", "TCP closes connection", "HTTP response"],
        correct: 1
      },
      {
        text: "What is a disadvantage of HTTPS?",
        answers: ["No encryption", "Uses wrong port", "Slower due to encryption", "Stateless", "No certificates"],
        correct: 2
      },
      {
        text: "Which protocol assigns IP addresses automatically?",
        answers: ["FTP", "DNS", "DHCP", "SMTP", "HTTP"],
        correct: 2
      },
      {
        text: "FTP uses which ports?",
        answers: ["23 and 22", "80 and 443", "20 and 21", "25 and 110", "67 and 68"],
        correct: 2
      },
      {
        text: "What is the secure version of Telnet?",
        answers: ["FTP", "HTTPS", "SSH", "SMTP", "DNS"],
        correct: 2
      }
    ]
  },
  {
    id: "lec6",
    title: "Data Link Layer Protocols",
    label: "Lecture 6",
    questions: [
      {
        text: "What is the main responsibility of the data link layer?",
        answers: [
          "End-to-end communication",
          "Node-to-node data transfer",
          "IP address assignment",
          "Encryption",
          "Routing packets"
        ],
        correct: 1
      },
      {
        text: "The data link layer is divided into which two sublayers?",
        answers: ["TCP and UDP", "LLC and MAC", "DNS and DHCP", "HTTP and FTP", "ARP and IP"],
        correct: 1
      },
      {
        text: "Which function is part of Logical Link Control (LLC)?",
        answers: ["Media sharing", "Framing", "IP routing", "Encryption", "DNS resolution"],
        correct: 1
      },
      {
        text: "What does framing add to a message?",
        answers: ["Encryption keys", "Port numbers", "Sender and destination addresses", "IP addresses", "Passwords"],
        correct: 2
      },
      {
        text: "Flow control is used to:",
        answers: ["Encrypt frames", "Prevent receiver overload", "Route packets", "Assign MAC addresses", "Compress data"],
        correct: 1
      },
      {
        text: "What is a buffer?",
        answers: [
          "A routing table",
          "Temporary storage for incoming data",
          "Encryption key",
          "Protocol type",
          "Address mapping"
        ],
        correct: 1
      },
      {
        text: "Error control includes:",
        answers: [
          "Routing and forwarding",
          "Encryption and decryption",
          "Error detection and retransmission",
          "Compression and decompression",
          "Address resolution"
        ],
        correct: 2
      },
      {
        text: "What does ARQ stand for?",
        answers: [
          "Automatic Routing Query",
          "Automatic Repeat Request",
          "Address Resolution Query",
          "Advanced Routing Quality",
          "Automatic Response Queue"
        ],
        correct: 1
      },
      {
        text: "In Stop-and-Wait protocol, the sender:",
        answers: [
          "Sends multiple frames continuously",
          "Sends one frame and waits for acknowledgment",
          "Never waits for response",
          "Sends frames randomly",
          "Sends only acknowledgments"
        ],
        correct: 1
      },
      {
        text: "Sliding window protocols improve:",
        answers: ["Security", "Efficiency of transmission", "Encryption", "Addressing", "Authentication"],
        correct: 1
      },
      {
        text: "In Go-back-N, if frame k is lost:",
        answers: [
          "Only frame k is retransmitted",
          "All frames are ignored permanently",
          "Frames from k onward are retransmitted",
          "No retransmission occurs",
          "Only last frame is retransmitted"
        ],
        correct: 2
      },
      {
        text: "Selective Repeat protocol:",
        answers: [
          "Retransmits all frames",
          "Retransmits only lost or damaged frames",
          "Does not use acknowledgment",
          "Uses only one frame",
          "Ignores errors"
        ],
        correct: 1
      },
      {
        text: "Point-to-point access means:",
        answers: [
          "Shared communication link",
          "Dedicated link between two devices",
          "Wireless communication only",
          "Multiple devices sharing link",
          "Random transmission"
        ],
        correct: 1
      },
      {
        text: "Multiple access occurs when:",
        answers: [
          "Only one device uses the link",
          "Devices share a communication link",
          "No communication exists",
          "Only routers communicate",
          "Encryption is enabled"
        ],
        correct: 1
      },
      {
        text: "In random access methods:",
        answers: [
          "One station controls others",
          "Transmission is scheduled",
          "Stations transmit randomly",
          "Only one station exists",
          "No collisions occur"
        ],
        correct: 2
      },
      {
        text: "What happens during a collision?",
        answers: [
          "Frames are encrypted",
          "Frames are destroyed or modified",
          "Frames are compressed",
          "Frames are delayed",
          "Frames are duplicated"
        ],
        correct: 1
      },
      {
        text: "CSMA/CD is used to:",
        answers: ["Avoid collisions only", "Detect collisions", "Encrypt data", "Assign IP addresses", "Route packets"],
        correct: 1
      },
      {
        text: "In controlled access, a station can transmit only when:",
        answers: [
          "It decides randomly",
          "Authorized by other stations",
          "Buffer is full",
          "No other station exists",
          "It detects collision"
        ],
        correct: 1
      },
      {
        text: "Channelization divides bandwidth using:",
        answers: ["Encryption", "Routing tables", "Time, frequency, or code", "MAC addresses", "Buffers"],
        correct: 2
      },
      {
        text: "ARP is used to:",
        answers: ["Map MAC to IP", "Map IP to MAC", "Assign IP dynamically", "Encrypt data", "Detect errors"],
        correct: 1
      },
      {
        text: "ARP request is:",
        answers: ["Unicast", "Broadcast", "Multicast", "Encrypted", "Routed"],
        correct: 1
      },
      {
        text: "What is the main purpose of STP?",
        answers: ["Increase bandwidth", "Prevent switching loops", "Encrypt traffic", "Assign IP addresses", "Compress data"],
        correct: 1
      },
      {
        text: "HDLC is:",
        answers: [
          "Byte-oriented protocol",
          "Bit-oriented protocol",
          "Application layer protocol",
          "Encryption protocol",
          "Routing protocol"
        ],
        correct: 1
      },
      {
        text: "PPP supports:",
        answers: [
          "Multipoint links only",
          "Point-to-point links only",
          "No authentication",
          "No error detection",
          "Only routing"
        ],
        correct: 1
      },
      {
        text: "Which protocol prevents broadcast storms caused by loops?",
        answers: ["ARP", "FTP", "STP", "DNS", "DHCP"],
        correct: 2
      }
    ]
  }
];

const state = {
  lectureIndex: 0,
  questionIndex: 0,
  mode: "study",
  showAll: false,
  answers: {}
};

const letters = ["A", "B", "C", "D", "E"];
const lectureList = document.querySelector("#lectureList");
const lectureEyebrow = document.querySelector("#lectureEyebrow");
const lectureTitle = document.querySelector("#lectureTitle");
const questionHost = document.querySelector("#questionHost");
const questionCounter = document.querySelector("#questionCounter");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const scoreText = document.querySelector("#scoreText");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const studyModeBtn = document.querySelector("#studyModeBtn");
const examModeBtn = document.querySelector("#examModeBtn");
const showAllBtn = document.querySelector("#showAllBtn");

function currentLecture() {
  return lectures[state.lectureIndex];
}

function answerKey(questionIndex = state.questionIndex) {
  return `${currentLecture().id}-${questionIndex}`;
}

function renderLectures() {
  lectureList.innerHTML = lectures
    .map((lecture, index) => `
      <button class="lecture-item ${index === state.lectureIndex ? "active" : ""}" type="button" data-lecture="${index}">
        <strong>${lecture.label}</strong>
        <span>${lecture.title} - ${lecture.questions.length} questions</span>
      </button>
    `)
    .join("");
}

function getAnsweredCount() {
  return currentLecture().questions.filter((_, index) => state.answers[answerKey(index)] !== undefined).length;
}

function getCorrectCount() {
  return currentLecture().questions.filter((question, index) => state.answers[answerKey(index)] === question.correct).length;
}

function renderStats() {
  const total = currentLecture().questions.length;
  const answered = getAnsweredCount();
  const correct = getCorrectCount();
  const score = answered === 0 ? 0 : Math.round((correct / answered) * 100);

  progressText.textContent = `${answered} / ${total}`;
  progressBar.style.width = `${(answered / total) * 100}%`;
  scoreText.textContent = `${score}%`;
  questionCounter.textContent = `Question ${state.questionIndex + 1} of ${total}`;
}

function renderQuestion() {
  const lecture = currentLecture();
  const question = lecture.questions[state.questionIndex];
  const selected = state.answers[answerKey()];
  const shouldReveal = state.showAll || (state.mode === "study" && selected !== undefined);

  lectureEyebrow.textContent = lecture.label;
  lectureTitle.textContent = lecture.title;
  questionHost.innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span>${lecture.label}</span>
        <span>${state.mode === "study" ? "Instant feedback" : "Exam mode"}</span>
      </div>
      <h3>${state.questionIndex + 1}. ${question.text}</h3>
      <div class="answers">
        ${question.answers.map((answer, index) => {
          const isCorrect = index === question.correct;
          const isSelected = index === selected;
          const resultClass = [
            isSelected ? "selected" : "",
            shouldReveal && isCorrect ? "correct" : "",
            shouldReveal && isSelected && !isCorrect ? "wrong" : ""
          ].filter(Boolean).join(" ");

          return `
            <button class="answer-option ${resultClass}" type="button" data-answer="${index}" aria-pressed="${isSelected}">
              <span class="answer-letter">${letters[index]}</span>
              <span class="answer-text">${answer}</span>
            </button>
          `;
        }).join("")}
      </div>
      ${shouldReveal ? `<div class="feedback">Correct answer: ${letters[question.correct]}. ${question.answers[question.correct]}</div>` : ""}
    </article>
  `;

  prevBtn.disabled = state.questionIndex === 0;
  nextBtn.disabled = state.questionIndex === lecture.questions.length - 1;
  renderStats();
}

function render() {
  renderLectures();
  renderQuestion();
  studyModeBtn.classList.toggle("active", state.mode === "study");
  examModeBtn.classList.toggle("active", state.mode === "exam");
  showAllBtn.textContent = state.showAll ? "Hide all answers" : "Show all answers";
}

lectureList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lecture]");
  if (!button) return;

  state.lectureIndex = Number(button.dataset.lecture);
  state.questionIndex = 0;
  state.showAll = false;
  render();
});

questionHost.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;

  state.answers[answerKey()] = Number(button.dataset.answer);
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  state.questionIndex = Math.max(0, state.questionIndex - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  state.questionIndex = Math.min(currentLecture().questions.length - 1, state.questionIndex + 1);
  renderQuestion();
});

resetBtn.addEventListener("click", () => {
  currentLecture().questions.forEach((_, index) => {
    delete state.answers[answerKey(index)];
  });
  state.questionIndex = 0;
  state.showAll = false;
  render();
});

studyModeBtn.addEventListener("click", () => {
  state.mode = "study";
  state.showAll = false;
  render();
});

examModeBtn.addEventListener("click", () => {
  state.mode = "exam";
  state.showAll = false;
  render();
});

showAllBtn.addEventListener("click", () => {
  state.showAll = !state.showAll;
  render();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const answerIndex = letters.indexOf(key);

  if (answerIndex !== -1) {
    state.answers[answerKey()] = answerIndex;
    renderQuestion();
  }

  if (event.key === "ArrowLeft") prevBtn.click();
  if (event.key === "ArrowRight") nextBtn.click();
});

render();
